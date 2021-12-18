import {  useEffect,useState } from 'react'
import { Link } from "react-router-dom";
import urp from '../../ultis/main'

function AddContact({setMain,setDesfoc}) {
  let query = urp.Functions.useQuery()
  //let favorito = query.get("favorito") -- a adicionar
  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  },[setMain,setDesfoc])

  const [New,setNew] = useState({number: parseInt(query.get("number")), data:{ name:'',sobrenome:'',favorito:false,img:''}})
  const [Name,setName] = useState('')

  useEffect(() => {
    console.log(New.data);
  }, [New])

  
  return(<>
    <div className='BoxMainInfoContactadd'>
      <label> 
      <Link to={`/PhoneCallFull/PhoneApp?aba=${query.get("lastpage")}`}>
          <p className='blueC'>Cacelar</p> 
        </Link>
        <p className='new Tx-a-c'>New Contact</p> 
        
          <p className='Tx-a-r' onClick={()=>urp.Functions.SaveContact(New)}>OK</p> 
        
      </label>
      <div className='FullContact'><div className='PerfilContactsAdd'></div></div>
      <div className='FullContact'><p className='addFoto Tx-a-c blueC'>Adicionar Foto</p></div>
      <div className='CardContactsTools'>
        <div className='NumberCenterNovoContato'>
          <input type="text"  placeholder='Nome' onKeyUp={(e)=>{ setNew({number: New.number, data:{ name:e.target.value,sobrenome:New.data.sobrenome,favorito:New.data.favorito,img:New.data.img}})}}/>
        </div>
        <div className='NumberCenterNovoContato'>
          <input type="text"  placeholder='Sobrenome' onKeyUp={(e)=>{ setNew({number: New.number, data:{ name:New.data.name,sobrenome:e.target.value,favorito:New.data.favorito,img:New.data.img}})}}/>
        </div>
        <div className='NumberCenterNovoContato'>
          {New.number != ''? 
          <input className='input' type="number"  placeholder='Phone' value={New.number}/>
          : 
          <input className='input' type="number"  placeholder='Phone'  onKeyUp={(e)=>{ setNew({number:parseInt(e.target.value), data:{ name:New.data.name,sobrenome:New.data.sobrenome,favorito:New.data.favorito,img:New.data.img}})}}/>
          }
          
        </div>
      </div>
    </div>
  </>)
}

export {AddContact}
// 