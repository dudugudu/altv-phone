import './App.css';
import React from 'react';
import { AppIcon } from './component/icons'
import{PhoneFullViwer} from './component/phoneViwerFull'
import { Routes, Route } from "react-router-dom";
import {useState,useEffect} from'react'
import{ External} from './celphoneextras'
import {SoundChamada,SoundChamando} from './celphoneextras'
import fdp from './img/walpaper.jpg'

function App() {
  const [Main, setMain] = useState({color:'transparent',img:`url(${fdp})`})
  const [Desfoc, setDesfoc] = useState('none')

  return (
    <External Main={Main} Desfoc={Desfoc}>
          <Routes>
            <Route path="/" element={<HomeCell setMain={setMain} setDesfoc={setDesfoc} />} />
            <Route path="/PhoneCallFull/:appType" element={<PhoneFullViwer  setMain={setMain} setDesfoc={setDesfoc}/> }  />
          </Routes>
    </External>
  );
}




function HomeCell({setMain,setDesfoc}) {
  useEffect(() => {
    setMain({color:'transparent',img: `url(${fdp})`   })
    setDesfoc('none')
    SoundChamada({type:'stop'})
    SoundChamando({type:'stop'})
  },[setMain,setDesfoc])
 
  return(<>
    <div className='BVMain'>
      <div  className='j-c'>
        <div>
      
      </div>

      </div>
    

    </div>
      <div className='BVRodape'>
        <div className='icon-Bar'>
          <AppIcon img='call' to='/PhoneCallFull/PhoneApp'/>
          <AppIcon img='contacts' to='/PhoneCallFull/PhoneApp?aba=contacts'/>
          <AppIcon img='msg' to='/PhoneCallFull/Mesage'/>
          <AppIcon img='camera' to=''/>
        </div>
      </div>
      
  </>)
}

export default App;
