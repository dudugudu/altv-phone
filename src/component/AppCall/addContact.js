import {  useEffect,useState } from 'react'
import urp from '../../ultis/main'
import {Center,TopBar,Text,Iconprofile} from '../Tools/Componnests'

function AddContact({setMain,setDesfoc}) {
  let query = urp.Functions.useQuery()
  //let favorito = query.get("favorito") -- a adicionar
  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  },[setMain,setDesfoc])

  const [New,setNew] = useState({number: query.get("number") ? query.get("number") : '' , data:{ name:'',sobrenome:'',favorito:false,img:''}})

 
  return(<>
    <div className='BoxMainInfoContactadd'>
      <TopBar  
      childrenLeft={
      <Text txtaling='left' to={`/PhoneCallFull/PhoneApp?aba=${query.get("lastpage")}`} cursor>Cacelar</Text>
      }childrenRight={
        <Text to='/' color='Black' txtaling='right' onclick={()=>{ if(urp.communication.SaveContact(New)){ }}} cursor>OK</Text>
      }><Text color='black'>New Contact</Text></TopBar>
      <Center><Iconprofile width='70px'  height='70px'/></Center>
      <Center padding='5px 0'><p className='addFoto Tx-a-c blueC'>Adicionar Foto</p></Center>
      <div className='CardContactsTools'>
        <div className='NumberCenterNovoContato'>
          <input type="text"  placeholder='Nome' onKeyUp={(e)=>{ setNew({number: New.number, data:{ name:e.target.value,sobrenome:New.data.sobrenome,favorito:New.data.favorito,img:New.data.img}})}}/>
        </div>
        <div className='NumberCenterNovoContato'>
          <input type="text"  placeholder='Sobrenome' onKeyUp={(e)=>{ setNew({number: New.number, data:{ name:New.data.name,sobrenome:e.target.value,favorito:New.data.favorito,img:New.data.img}})}}/>
        </div>
        <div className='NumberCenterNovoContato'>
          {(New.number).length === 9 ? 
          <input className='input' type="text"  placeholder='Peeeehone' value={urp.Functions.FormatStringNumber(New.number)} disabled />
          : 
          <input className='input' type="text"  placeholder='Phone'   onChange={(e)=>{setNew({number:e.target.value, data:{ name:New.data.name,sobrenome:New.data.sobrenome,favorito:New.data.favorito,img:New.data.img}})}}/>
          }
          
        </div>
      </div>
    </div>
  </>)
}
// value={urp.Functions.FormatStringNumber(New.number)}


export {AddContact}
// 