import{ Link } from 'react-router-dom'
function Conversation({setMain,setDesfoc}) {
  
  return(<>
    <div className='BoxMainMesages'>
    <label className='TopBar-Tools'> 
      <div className='flex boxMsgPadrao'>

          <i class="material-icons-outlined blueC">chevron_left</i>
          
          <p className='blueC'>Back</p> 

      </div>  
           <div className='boxIMmensage'>
              <div className='PefilMsg'></div>
              <p className='phone'>215-515</p>
          </div>
          <p className='boxMsgPadrao Tx-a-r'></p> 
        
      </label>
     
      <div className='MensageViweI Border-button'>

      <div className='Box-ViwerMensage-left'>
        Opa xipanca tranquilo queri ver ai com vc como ta  adisponibilidade de se fazer um trampo
      </div>
      <div className='Box-ViwerMensage-right green'>
        E ai tranquilo  posso sim  segunda que ve posso tranquilo
      </div>

     

     </div>
     <div className='InputConversation'>
       
      <div className='input-grup-mensage'>
          
          <input className='Input ml-1' type="text" placeholder='Search' />
          <div className='BtnSend '>
            <i class="material-icons-outlined">arrow_upward</i>
          </div>
          
      </div>
     </div>
    </div>
  </>)
}
export{Conversation}