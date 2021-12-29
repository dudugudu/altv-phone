import { useState } from 'react'
import{ Link } from 'react-router-dom'
import {Iconprofile} from '../Tools/Componnests'

import urp from '../../ultis/main'
function MesageMain({setMain,setDesfoc}) {
   let query = urp.Functions.useQuery()

   const [Histoty,setHistory] = useState(urp.communication.GetHistory())
  return(<>
    <div className='BoxMainMesages'>
    <label className='TopBar-Tools'> 
    <Link to='/'>
      <div className='flex'>

          <i class="material-icons-outlined blueC">chevron_left</i>
          <p className='blueC'>Back</p> 

      </div>
      </Link>
          <p className='Tx-a-r'>OK</p> 
        
      </label>
      <div className='TitleViwer'>
        <h1>Mensagens</h1>
      </div>
      <div className='MensageViweII'>

     {
       Histoty.map((obj)=>{
         if (obj.contain_message !== 0) {
          return( <div>
            
            <Link to={`/PhoneCallFull/MesageIn?number=${urp.communication.WhatPhone(obj.id)}&chat_id=${obj.id}`}>
        <div className='CardMensage ' onClick={()=>{urp.communication.GetChatId(obj.id)}}>
        <Iconprofile width='35px'  height='35px'/>
          <div className='InfoCardMensage '>
              <label className='name between'>
                <p>{urp.communication.VerifyContact(urp.communication.WhatPhone(obj.id))}</p>
                <div className='leftMensage flex '> 
                  <p className='mr-2'>10:40</p>
                  <i class="material-icons-outlined">chevron_right</i>
                </div>
                </label>
                <p className='TxtAreaMensage'>{urp.communication.VerifyCharacter(obj.last_message)}</p>
            </div>
        </div>
      </Link>

          </div> )
        }
        
       })
     }

    

     </div>
    </div>
  </>)
}
export{MesageMain}