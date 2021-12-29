import {  useEffect } from 'react'
import urp from '../../ultis/main'
import { LineInfo,Icon,SpaceEvenly,IconTxt,Iconprofile} from '../Tools/Componnests'

function InfoContact({setMain,setDesfoc}) {
  let query = urp.Functions.useQuery()
  // let favorito = query.get("favorito") --- A implementar
  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  },[setMain,setDesfoc])

  return(<>
    <div className='BoxMainInfoContact'>
     <label >
       <Icon fontsize='20px' color='#0179fe' to={`/PhoneCallFull/PhoneApp?aba=${query.get("lastpage")}`}>chevron_left</Icon>
       <p>Contacts</p>
       </label>
     <div className='FullContact'><Iconprofile width='70px'  height='70px'/></div>
     <div className='FullContact'>{query.get("name")}</div>
     <SpaceEvenly >
        <IconTxt to={`/PhoneCallFull/MesageIn?number=${query.get("number")}&buscar=true`} title='Message' >chat_bubble</IconTxt>
        <IconTxt to={`/PhoneCallfull/CallLink?number=${query.get("number")}&recebendo=false&chamada=true`} onclick={()=>{urp.communication.CallNumber(query.get("number"));urp.communication.InserRecents(query.get("number"))}} title='Call' >local_phone</IconTxt>
        <IconTxt title='WhatsApp' >whatsapp</IconTxt>
     </SpaceEvenly>
     <div className='CardContactsTools'>
      <LineInfo title='Name'>{query.get("name")}</LineInfo>
      <LineInfo title='Phone'>{query.get("number")}</LineInfo>
      <LineInfo>Remove From Favourites</LineInfo>
      <LineInfo onclick={()=>{ urp.communication.DeleteContact(query.get("number"))}}>Remove Contact</LineInfo>
     </div>
    </div>
  
  </>)
}





export{InfoContact}