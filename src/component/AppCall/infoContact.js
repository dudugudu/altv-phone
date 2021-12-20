import {  useEffect } from 'react'
import { Link } from "react-router-dom";
import urp from '../../ultis/main'
import { LineInfo,Icon,SpaceEvenly,IconTxt} from '../Tools/Componnests'

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
     <div className='FullContact'> <div className='PerfilContacts'></div></div>
     <div className='FullContact'>{query.get("name")}</div>
     <SpaceEvenly >
        <IconTxt title='Message' >chat_bubble</IconTxt>
        <IconTxt title='Call' >local_phone</IconTxt>
        <IconTxt title='WhatsApp' >whatsapp</IconTxt>
     </SpaceEvenly>
     <div className='CardContactsTools'>
      <LineInfo title='Name'>{query.get("name")}</LineInfo>
      <LineInfo title='Phone'>{query.get("number")}</LineInfo>
      <LineInfo>Remove From Favourites</LineInfo>
      <LineInfo>Remove Contact</LineInfo>
     </div>
    </div>
  
  </>)
}





export{InfoContact}