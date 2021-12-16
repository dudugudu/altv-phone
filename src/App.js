import './App.css';
import React from 'react';
import model   from './img/iphone.png'
import { AppIcon } from './component/icons'
import{CallApp} from './component/call'
import{CallFull} from './component/callfull'
import { Routes, Route } from "react-router-dom";
import {useState,useEffect} from'react'

function App() {
  const [Main, setMain] = useState({color:'transparent',img:'url(/static/media/walpaper.04f956eb.jpg)',filter:'blur(0)'})
  const [Desfoc, setDesfoc] = useState('none')
 
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
        <div className='BoxViwerI'>
          <Routes>
            <Route path="/" element={<HomeCell setMain={setMain} setDesfoc={setDesfoc} />} />
            <Route path="/PhoneCall/:aba" element={<CallApp  setMain={setMain} setDesfoc={setDesfoc}/> }  />
            <Route path="/PhoneCallFull/:aba" element={<CallFull  setMain={setMain} setDesfoc={setDesfoc}/> }  />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function HomeCell({setMain,setDesfoc}) {
  useEffect(() => {
    setMain({color:'transparent',img:'url(/static/media/walpaper.04f956eb.jpg)'})
    setDesfoc('none')
  }, [])
 
  return(<>
    <div className='BVMain'></div>
      <div className='BVRodape'>
        <div className='icon-Bar'>
          <AppIcon img='call' to='/PhoneCall/dialpad'/>
          <AppIcon img='contacts' to='/PhoneCall/contacts'/>
          <AppIcon img='msg' to='/msg'/>
          <AppIcon img='camera' to='/camera'/>
        </div>
      </div>
  </>)
}

export default App;
