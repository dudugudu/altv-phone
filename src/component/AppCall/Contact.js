import React from 'react';
import { useState} from 'react'
import { Link } from "react-router-dom";

import urp from '../../ultis/main'


function VwContact() {
  const [Contact] = useState(urp.Functions.GetContact());  

  return(<>
   <div className='ContactsViweI'>
     <div className='between'>
      <h1>Contacts</h1>
      <Link to='/PhoneCallFull/Novocontato?lastpage=contacts'>
        <i class="fal fa-plus"></i>
      </Link>
     </div>
     <div className='input-grup'>
        <i class="fal fa-search ml-1"></i>
        <input className='Input ml-2' type="text" placeholder='Search' />
     </div>
    </div>
    <div className='ContactsViweII'>
      {Contact.map(obj => <CardContact db={obj}/>)}        
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