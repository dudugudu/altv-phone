import React from 'react';
import model   from './img/iphone.png'
//import urp from './ultis/main'

import chamada from './sound/chamada.mp3'
import chamando from './sound/chamando.mp3'
//import ocupado from './sound/ocupado.mp3'
import notify from './sound/notify.mp3'
import {motion} from 'framer-motion'



function External({children,Main,Desfoc}) {
  


  return (
    <div className="App" >
      <motion.div
          initial={{opacity:1, y: 550 }}
          animate={{opacity:1,  y: 0 }}
          transition={{
            y: { type: "spring", stiffness: 20 },
            default: { duration: 2 },
          }}
        >


          
        
          <div className='Phone'>
          
              <div className='BoxViwer' style={{ backgroundColor: Main.color , backgroundImage: Main.img , backdropFilter: Main.filter}} >     
                <div className='BoxViwerDesfoc' style={{ display:Desfoc}} ></div>
                <div className='Topbar'>
                  <p className='ml-4'>Vivo</p>
                  <p className='mr-3 between'><i class="fal fa-battery-half"></i> <i class="fal fa-signal-4"></i></p>
                </div>
              </div>
              <img src={model} alt="png" />
              <div className='BoxViwerI'>{children}</div>
          </div>
      
      </motion.div>
      
    </div>
  );
}



let i = false;
let audio = new Audio(chamada)
let SoundChamado = new Audio(chamando)

export function SoundChamada ({type}) { 
  if (!i && type === 'play') {
    i = true
      audio.play()
      audio.volume = 0.1
      audio.loop = true
    }
  if (i && type === 'stop') {
    i = false
    audio.pause()
  }
  return (<></>);
};
export function SoundChamando ({type}) { 
  if (!i && type === 'play') {
    i = true
    SoundChamado.play()
    SoundChamado.volume = 0.5
    SoundChamado.loop = true
  }
  if (i && type === 'stop') {
    i = false
    SoundChamado.pause()
  }
  return (<></>);
};
export function SoundNotify ({type}) { 
  
let Notify = new Audio(notify)
  if (!i && type === 'play') {
    
    i = true
    Notify.play()
    Notify.volume = 0.5
    Notify.loop = true
  }
  if (i && type === 'stop') {
    i = false
    Notify.pause()
  }
  return (<></>);
};



export{ External }