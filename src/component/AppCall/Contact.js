import React from 'react';
import { useState} from 'react'
import { Link } from "react-router-dom";
import { Icon } from '../Tools/Componnests';
import urp from '../../ultis/main'


function VwContact() {
  const [Contact] = useState(urp.communication.GetContact());  
  const [SearchContact,setSearchContact] = useState('');  
  
  return(<>
   <div className='ContactsViweI'>
     <div className='between'>
      <h1>Contacts</h1>
    
        <Icon to='/PhoneCallFull/Novocontato?lastpage=contacts' color='#0179fe' fontsize='19px' cursor outlined>add</Icon>
     
     </div>
     <div className='input-grup'>
        <i class="fal fa-search ml-1"></i>
        <input className='Input ml-2' type="text" placeholder='Search' onChange={(e)=>{setSearchContact(e.target.value)}} />
     </div>
    </div>
    <div className='ContactsViweII'>
      {Contact.map((obj) => {
          if ( obj.data.name.toLowerCase().indexOf(SearchContact.toLowerCase()) != -1  ) {
              return(<CardContact db={obj}/>) 
          }
        })}        
    </div>
  </>)
}

function CardContact({db}) {
  return(<>
    <div className='CardContacts mt-1'>
      <Link to={`/PhoneCallFull/infoContacts?number=${db.number}&name=${db.data.name}&favorito=${db.data.favorito}&lastpage=contacts`}>
        <div className='InfoCardContacts a-c'>
            <p className='name mb-1'>{db.data.name}</p>
        </div>
      </Link>
    </div> 
  </>)
}

export{VwContact}