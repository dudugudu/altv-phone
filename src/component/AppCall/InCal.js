import { useState, useEffect } from 'react'
import urp  from '../../ultis/main'
import {SoundChamada,SoundChamando} from '../../celphoneextras'
import fdp from '../../img/walpaper.jpg'
import { Cicle} from '../Tools/Componnests'

function Call({setMain,setDesfoc,setBackBar}) {
  useEffect(() => {
    setMain({color:'transparent',img:`url(${fdp}`})
    setDesfoc('block')
    setBackBar(false)
    
  },[setMain,setDesfoc,setBackBar])

  let query = urp.Functions.useQuery()
  const [Inccall,setInccall] = useState('false');  
  const [InChanel,setChanel] = useState(false);  
  const [ChanelName,setChanelName] = useState(query.get('number'));  
  const [Style,setStyle] = useState('space-between');  
  const [timeLeft, setTimeLeft] = useState({incal:false, decorido:0});
  
  
  
  

  useEffect(() => {
    timeLeft.incal && setTimeout(() => setTimeLeft({incal:true, decorido:  timeLeft.decorido + 1 }), 1000);
  }, [timeLeft]);

  useEffect(()=>{
    
    if (query.get('chamada') === 'true') {
      setStyle('center')
      setInccall('chamando')
    }
     if (query.get('recebendo') === 'true') {
      SoundChamada({type:'play'})
      urp.communication.InserRecents(query.get('number'))
    }else{
      SoundChamando({type:'play'})
    }
   
    if (urp.communication.CheckAtlV()) {
      // eslint-disable-next-line no-undef
      alt.on('Phone:InChanel', ()=>{  
        if (query.get('recebendo') === 'false') {
          setChanelName(urp.communication.MyNumber());
          setChanel(true)
          setTimeLeft({incal:true, decorido:  0 })
          SoundChamando({type:'stop'});
          setInccall('incall')
        }
      })
     
    }
    
  },[])

 
 
  return( 
  <div className='BoxMainCallLink'>
    
    <div className='BoxViwerCallLink'>
      <h1>{urp.communication.VerifyContact(query.get('number')) }</h1>)
      
      {Inccall === 'incall'? <p>{urp.Functions.TimeFormat(timeLeft.decorido)}</p> : Inccall === 'chamando'?<p>Chamando</p>: <></>}
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

        <Cicle to='/' fontsize='26px' bcolor='#eb4e3d' d='50px' onclick={()=>{urp.communication.DestroyCall(ChanelName,query.get('number'),InChanel); SoundChamando({type:'stop'})}} >call_end</Cicle>

        {Inccall === 'incall' ? <></> : Inccall === 'chamando' ? <></>:
          <Cicle fontsize='26px' bcolor='#35c759' d='50px' 
          to={`/PhoneCallfull/CallLink?chamada=true&number=${query.get('number')}&recebendo=${query.get('recebendo')}`}
          onclick={()=>{
            urp.communication.AceptCall(query.get('number')); 
            setInccall('incall');setStyle('center');
            if(query.get('recebendo') === 'true'){
              setChanel(true)
              setTimeLeft({incal:true , decorido: 1})
            }
          }} 
          >call</Cicle>   
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


///124620035 duduzeira
///193320774 xipanca
///166531286 nick