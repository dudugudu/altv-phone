import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import urp  from '../../ultis/main'
import {PlayerOn} from '../../celphoneextras'


function Call({setMain,setDesfoc}) {
  const [Inccall,setInccall] = useState(false);  
  const [Style,setStyle] = useState('space-between');  
  const [timeLeft, setTimeLeft] = useState({incal:false, decorido:0});
  //const [Contact] = useState(urp.Functions.GetContact());
  let query = urp.Functions.useQuery()
  
  useEffect(() => {
    setMain({color:'transparent',img:'url(/static/media/walpaper.04f956eb.jpg)',filter:'blur(20px)'})
    setDesfoc('block')
  },[setMain,setDesfoc])

  useEffect(() => {
    timeLeft.incal && setTimeout(() => setTimeLeft({incal:true, decorido:  timeLeft.decorido + 1 }), 1000);
  }, [timeLeft]);

  return( 
  <div className='BoxMainCallLink'>
    <div className='BoxViwerCallLink'>
      
      <h1>{urp.Functions.VerifyContact(query.get('number')) }</h1>)
      
      {Inccall &&<p>{urp.Functions.TimeFormat(timeLeft.decorido)}</p>}
      {Inccall &&  
        <div className='BoxToolsCallLinkExt '>
          <div className='BoxToolsCallLink'>
            <div className='LineNumberCallLinkTools mb-3' >  
                <ButonCallTools name="Mute">mic_off</ButonCallTools>
                <ButonCallTools name="Keypad">dialpad</ButonCallTools>
                <ButonCallTools name="Audio">volume_off</ButonCallTools>
            </div>
            <div className='LineNumberCallLinkTools' >
                <ButonCallTools name="Add call">add</ButonCallTools>
                <ButonCallTools name="FaceTime">videocam</ButonCallTools>
                <ButonCallTools name="Contacts">people</ButonCallTools>
            </div>
          </div>
          <PlayerOn/>
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
        
          <div className='NumberCenterCallLink green' onClick={()=>{setInccall(true);setStyle('center');setTimeLeft({incal:true , decorido: 1})}}>
            <i class="material-icons">call</i>
            <PlayerOn type='chamada'/>
          </div> 
        }
      </div>
    </div>
  </div>)
}

function ButonCallTools({children,name,onclick}){
  return(<>
    <div className='NumberCenterCallLinkToolsExt' >   
      <div className='NumberCenterCallLinkTools '  onClick={onclick}>
        <i class="material-icons">{children}</i>
      </div>
      <p>{name}</p> 
    </div>
  </>)
}

export{ Call}