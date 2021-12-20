import { useState,useEffect } from 'react'
import{ Link } from 'react-router-dom'
import urp from '../../ultis/main'
import {Icon,Iconprofile,MsgRight,MsgLeft,BoxMessage} from '../Tools/Componnests'
function Conversation({setMain,setDesfoc}) {

  useEffect(() => {
    setMain({color:'#fff',img:'none'})
    setDesfoc('none')
  },[setMain,setDesfoc])
  const [ssn]= useState(urp.communication.GetSSN())
  const [HMensege,setHMensege]= useState(urp.communication.GetMessage())
  const [Mensege,setMensege]= useState('')
  useEffect(() => {
    

  }, [Mensege])
  return(<>
    <div className='BoxMainMesages'>
      <label className='TopBar-Tools'> 
        <div className='boxMsgPadrao' >
            <Icon color='#0179fe' fontsize='24px' ml='-11px' to='/PhoneCallFull/Mesage' cursor  outlined >chevron_left</Icon>
            <p className='blueC' style={{marginLeft:'-3px'}}>Back</p> 
        </div>  
        <div className='boxIMmensage'>
          <div className='PefilMsg'>
            <Iconprofile width='40px'  height='40px'/>
          </div>
          <p className='phone'>215-515</p>
        </div>
        <p className='boxMsgPadrao Tx-a-r'></p> 
      </label>
      <BoxMessage height='386px' bcolor='#fff' id='message' bt overflow>
            {HMensege.map((obj)=>{
              if(obj.ssn === ssn){
                return(<MsgRight>{ obj.menssage}</MsgRight>)
              }else{
                return(<MsgLeft>{obj.menssage}</MsgLeft>)
              }
            })}
      </BoxMessage>
      <div className='InputConversation'>
        <Icon color='#35c759' fontsize='20px' mr='5px' onclick={()=>{setHMensege([...HMensege, {ssn: ssn,type:'', menssage:<Icon color='#fff' cursor>share_location</Icon> }]);setMensege('');scroll()}} cursor  outlined >room</Icon>
        <div className='input-grup-mensage'>    
            <input className='Input ml-1' type="text" placeholder='Search' value={Mensege} onChange={(e)=>{setMensege(e.target.value)}} onKeyUp={(e)=>{if(e.key === 'Enter') {if (urp.Functions.VerifyTxt(Mensege)){setHMensege([...HMensege, {ssn: ssn, menssage: Mensege}]);setMensege('');scroll()} }}}/>
            <div className='BtnSend ' onClick={()=>{if (urp.Functions.VerifyTxt(Mensege)){setHMensege([...HMensege, {ssn: ssn, menssage: Mensege}]);setMensege('');scroll()}}}>
              <i class="material-icons-outlined" >arrow_upward</i>
            </div>      
        </div>
     </div>
    </div>
  </>)
}

function scroll() {
    var doc = document.getElementById('message')
    doc.scrollTop = (doc.scrollHeight - doc.clientHeight)
}

/*  <div className='MensageViweI Border-button' id='message'>
            
     </div> */

export{Conversation}