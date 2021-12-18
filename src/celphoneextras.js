import React from 'react';
import model   from './img/iphone.png'
import {useState,useEffect} from'react'
import {ReceivingCall} from './ultis/functions'
import { Button } from '@chakra-ui/react'





function External({children,Main,Desfoc}) {
  
   
  return (
    <div className="App" >
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
      <div style={{position:'absolute'}}>
      
          <Button  color='teal' size='xs' onClick={()=>{ReceivingCall()}} >Receber Ligação</Button>
        
      </div>
    </div>
  );
}
let i = false;
let audio = new Audio('https://toque123.com/wp-content/uploads/2021/12/super-idol-marimba-remix.mp3')
function PlayerOn ({type}) { 
  
  if (!i) {
    i = true
    if (type !== undefined && type !== null) {
        audio.play()
        audio.volume = 0.1
        audio.loop = true
      }
  }else if (i && type === undefined) {
    audio.pause()
  }
  
  return (<></>);
};



export{ External,PlayerOn }