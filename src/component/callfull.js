import { useState, useEffect } from 'react'

import { Link ,useParams} from "react-router-dom";


function  CallFull({setMain,setDesfoc,BackPage}) {
  const [InfoContacts,setInfoContacts] = useState(false); 
  const [CallLink,setCallLink] = useState(false);  
  const{aba} = useParams();
  console.log(aba)
  useEffect(() => {
   
    setMain({color:'#f8f7fc',img:'none'})
    
  }, [])
  
  useEffect(() => {
    if (aba === 'infoContacts') {
      setCallLink(false);setInfoContacts(true);
    }else if (aba === 'CallLink') {
      setCallLink(true);setInfoContacts(false)
    }
  }, [aba])

  
  

  return (<>
      <div className='BVMainFull' >
          {InfoContacts && <PGInfoContacts  setMain={setMain} setDesfoc={setDesfoc}/>}    
          {CallLink && <PGCallLink setMain={setMain} setDesfoc={setDesfoc}/>}    
      </div>
      <Link to="/">
      <div className='BarReturnExtern'><div className='BarRetunr' onClick={BackPage}></div></div>
      </Link>
    </>)
}

function PGInfoContacts({setMain,setDesfoc}) {
  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  }, [])
  return( 
    <div className='BoxMainInfoContact'>
     <label > <i class="material-icons-outlined">chevron_left</i> <p>Contacts</p></label>
     <div className='FullContact'> <div className='PerfilContacts'></div></div>
     <div className='FullContact'>Eduardo Gustavo</div>
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
          <p className='blueC'> 49 921156165 </p>
      </div>
      <div className='CardContactInfoTools'>
          <p>Phone</p>
          <p className='blueC'> 49 921156165 </p>
      </div>
      <div className='CardContactInfoTools'>
        
          <p className='blueC'> Remove From Favourites </p>
      </div>
      <div className='CardContactInfoTools'>
        
          <p className='blueC'> Remove Contact</p>
      </div>

     </div>
    </div> )
}


function PGCallLink({setMain,setDesfoc}) {
  const [Inccall,setInccall] = useState(false);  
  const [Style,setStyle] = useState('space-between');  
  useEffect(() => {
    setMain({color:'transparent',img:'url(/static/media/walpaper.04f956eb.jpg)',filter:'blur(20px)'})
    setDesfoc('block')
  }, [])
  return( 
  <div className='BoxMainCallLink'>
    <div className='BoxViwerCallLink'>
      <h1>Eduardo Gustavo</h1>
      <p>00:00</p>
      {Inccall &&  
    <div className='BoxToolsCallLinkExt '>
      <div className='BoxToolsCallLink'>
        <div className='LineNumberCallLinkTools mb-3' >  
            <div className='NumberCenterCallLinkToolsExt' >   
              <div className='NumberCenterCallLinkTools ' >
                <i class="material-icons">mic_off</i>
              </div>
            <p>Mute</p> 
            </div>
            <div className='NumberCenterCallLinkToolsExt' >   
              <div className='NumberCenterCallLinkTools ' onClick={()=>{setInccall(true);setStyle('center')}}>
                <i class="material-icons">dialpad</i>
              </div> 
              <p>Keypad</p> 
            </div>
            <div className='NumberCenterCallLinkToolsExt' >   
              <div className='NumberCenterCallLinkTools ' onClick={()=>{setInccall(true);setStyle('center')}}>
                <i class="material-icons">volume_off</i>
              </div> 
              <p>Audio</p> 
            </div>
            
        </div>
        <div className='LineNumberCallLinkTools' >
            <div className='NumberCenterCallLinkToolsExt' >   
              <div className='NumberCenterCallLinkTools ' >
                <i class="material-icons">add</i>
              </div> 
              <p>Add call</p> 
            </div>
            <div className='NumberCenterCallLinkToolsExt' >   
              <div className='NumberCenterCallLinkTools ' onClick={()=>{setInccall(true);setStyle('center')}}>
                <i class="material-icons">videocam</i>
              </div> 
              <p>FaceTime</p> 
            </div>
            <div className='NumberCenterCallLinkToolsExt' >   
              <div className='NumberCenterCallLinkTools ' onClick={()=>{setInccall(true);setStyle('center')}}>
                <i class="material-icons">people</i>
              </div> 
              <p>Contacts</p> 
            </div>
            
        </div>
      </div>
    </div>    
          }
    </div>
    <div className='CallLinkFull'>
      <div className='LineNumberCallLink' style={{ justifyContent: Style }}>
        <Link to="/">
          <div className='NumberCenterCallLink red' >
            <i class="material-icons">call_end</i>
          </div> 
        </Link>
        {!Inccall &&  
          <div className='NumberCenterCallLink green' onClick={()=>{setInccall(true);setStyle('center')}}>
            <i class="material-icons">call</i>
          </div> 
          }
      </div>
    </div>
  </div> )
}






export {
  CallFull
}