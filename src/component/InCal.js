import { useState, useEffect } from 'react'
import { Link ,useParams,useLocation} from "react-router-dom";


function Call({setMain,setDesfoc}) {
  const [Inccall,setInccall] = useState(false);  
  const [Style,setStyle] = useState('space-between');  
  const [timeLeft, setTimeLeft] = useState({incal:false, decorido:0});

  useEffect(() => {
    setMain({color:'transparent',img:'url(/static/media/walpaper.04f956eb.jpg)',filter:'blur(20px)'})
    setDesfoc('block')
  }, [])

  useEffect(() => {
    timeLeft.incal && setTimeout(() => setTimeLeft({incal:true, decorido:  timeLeft.decorido + 1 }), 1000);
  }, [timeLeft]);

  return( 
  <div className='BoxMainCallLink'>
    <div className='BoxViwerCallLink'>
      <h1>995-120</h1>
      {Inccall &&<p>{timeLeft.decorido}</p>}
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
          </div> 
          }
      </div>
    </div>
  </div> )
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