import {  useEffect,useState } from 'react'
import { Link  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import urp from '../../ultis/main'

function AddContact({setMain,setDesfoc}) {
  let query = urp.Functions.useQuery()
  const navigate = useNavigate();
  //let favorito = query.get("favorito") -- a adicionar
  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  },[setMain,setDesfoc])

  const [New,setNew] = useState({number: query.get("number") ? query.get("number") : '' , data:{ name:'',sobrenome:'',favorito:false,img:''}})

 
  return(<>
    <div className='BoxMainInfoContactadd'>
      <label> 
      <Link to={`/PhoneCallFull/PhoneApp?aba=${query.get("lastpage")}`}>
          <p className='blueC'>Cacelar</p> 
        </Link>
        <p className='new Tx-a-c'>New Contact</p> 
        
          <p className='Tx-a-r' onClick={()=>{ if(urp.Functions.SaveContact(New)){ navigate('/');}}}>OK</p> 
        
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
          {(New.number).length === 6 ? 
          <input className='input' type="text"  placeholder='Peeeehone' value={urp.Functions.FormatStringNumber(New.number)} disabled />
          : 
          <input className='input' type="text"  placeholder='Phone'   onChange={(e)=>{ setNew({number:e.target.value, data:{ name:New.data.name,sobrenome:New.data.sobrenome,favorito:New.data.favorito,img:New.data.img}})}}/>
          }
          
        </div>
      </div>
    </div>
  </>)
}
// value={urp.Functions.FormatStringNumber(New.number)}


export {AddContact}
// 