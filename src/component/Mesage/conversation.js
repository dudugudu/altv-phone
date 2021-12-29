import { useState,useEffect } from 'react'
import urp from '../../ultis/main'
import {Icon,Iconprofile,MsgRight,MsgLeft,BoxMessage} from '../Tools/Componnests'

function Conversation({setMain,setDesfoc}) {
  let query = urp.Functions.useQuery()
  useEffect(() => {
    setMain({color:'#fff',img:'none'})
    setDesfoc('none')
  },[setMain,setDesfoc])
  
  const [ssn]= useState(urp.communication.GetSSN())
  const [HMensege,setHMensege]= useState([])
  const [Mensege,setMensege]= useState('')
  const [Chat_id,setChat_id]= useState('')

  useEffect(() => {
    setChat_id(query.get('chat_id'))
    if (query.get('buscar') === 'true') {
     
       // eslint-disable-next-line no-undef
      alt.emit('Phone:GetChatId',query.get('number'))
      
    }
    scroll()
    if (urp.communication.CheckAtlV()) {
      // eslint-disable-next-line no-undef
      alt.on('Phone:GetChatMessage', (result)=>{  
        setHMensege(result)
        scroll()
      })
      // eslint-disable-next-line no-undef
      alt.on('Phone:ReciveMessage', (data)=>{  
        // eslint-disable-next-line no-undef
        urp.communication.GetChatId(data.chat_id)
      })
      // eslint-disable-next-line no-undef
      alt.on('Phone:GetIdChat', (result)=>{  
        setChat_id(result)
      })
     
    }

  }, [])

 
 
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
          <p className='phone'>{query.get('number')}</p>
        </div>
        <p className='boxMsgPadrao Tx-a-r'></p> 
      </label>
      <BoxMessage height='386px' bcolor='#fff' id='message' bt overflow>
            {HMensege.map((obj)=>{
                console.log(ssn);
              if(obj.ssn == ssn){
                return(<MsgRight>{ obj.message}</MsgRight>)
              }else{
                return(<MsgLeft>{obj.message}</MsgLeft>)
              }
            })}
      </BoxMessage>
      <div className='InputConversation'>
        <Icon color='#35c759' fontsize='20px' mr='5px' cursor  outlined >room</Icon>
        <div className='input-grup-mensage'>    
            <input className='Input ml-1' type="text" placeholder='Search' value={Mensege} onChange={(e)=>{
              setMensege(e.target.value)}} onKeyUp={(e)=>{
                if(e.key === 'Enter') {
                  if (urp.Functions.VerifyTxt(Mensege)){
                    setHMensege([...HMensege, {type:'msg',ssn: ssn, message: Mensege}]);
                    setMensege('');
                    scroll()} 
                    urp.communication.CreateMessage('msg',Mensege,Chat_id,query.get('number'))
                }}}/>
            <div className='BtnSend ' onClick={()=>{if (urp.Functions.VerifyTxt(Mensege)){
              urp.communication.CreateMessage('msg',Mensege,Chat_id,query.get('number'));
               setHMensege([...HMensege, {type:'msg',ssn: ssn, message: Mensege}]);
               setMensege('');
               scroll()
               }}}>
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

///urp.communication.VerifyContact(query.get('number'))