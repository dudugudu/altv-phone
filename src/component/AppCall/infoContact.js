import {  useEffect } from 'react'
import { Link } from "react-router-dom";
import urp from '../../ultis/main'

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
       <Link to={`/PhoneCallFull/PhoneApp?aba=${query.get("lastpage")}`}>
       <i class="material-icons-outlined">chevron_left</i> 
       </Link>
       <p>Contacts</p>
       </label>
     <div className='FullContact'> <div className='PerfilContacts'></div></div>
     <div className='FullContact'>{query.get("name")}</div>
     <div className='FullContactII evenly'>
      <div className='NumberCenterContactsExt'>
        <div className='GlobalContactsTolls'>
          <div className='NumberCenterContacts'>
            <i class="material-icons">chat_bubble</i>
          </div>
        </div>
        <p>Message</p>
       </div>
       <div className='NumberCenterContactsExt'>
        <div className='GlobalContactsTolls'>
            <div className='NumberCenterContacts'>
              <i class="material-icons">local_phone</i>
            </div>
          </div>
          <p>Call</p>
       </div>
       <div className='NumberCenterContactsExt'>
          <div className='GlobalContactsTolls'>
            <div className='NumberCenterContacts'>
              <i class="material-icons">whatsapp</i>
            </div>
          </div>
          <p>WhatsApp</p>
       </div>
     </div>
     <div className='CardContactsTools'>
       
      <div className='CardContactInfoTools'>
          <p>Nome</p>
          <p className='blueC'>{query.get("name")} </p>
      </div>
      <div className='CardContactInfoTools'>
          <p>Phone</p>
          <p className='blueC'> {query.get("number")} </p>
      </div>
      <div className='CardContactInfoTools'>
        
          <p className='blueC'> Remove From Favourites </p>
      </div>
      <div className='CardContactInfoTools'>
        
          <p className='blueC'> Remove Contact</p>
      </div>

     </div>
    </div>
  
  </>)
}





export{InfoContact}