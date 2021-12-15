import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import model   from './img/iphone.png'
import { AppIcon } from './component/icons'
import{CallApp} from './component/call'

function App() {
  const [IsApp,setIsApp] = useState(false);


  function ativeAPP(){
    if (!IsApp) {
      console.log('entrando');
      document.getElementById('main').style.backgroundColor = '#f8f7fc';
      document.getElementById('main').style.backgroundImage = 'none';
      setIsApp(true)
    }else {
      document.getElementById('main').style.backgroundColor = 'transparent';
      document.getElementById('main').style.backgroundImage = "url(/static/media/walpaper.04f956eb.jpg)";
      setIsApp(false)
    }
  }

  return (
    <div className="App">
      <div className='Phone'>
        <div className='BoxViwer' id='main'> 
        <div className='Topbar'>
          <p className='ml-4'>Vivo</p>
          <p className='mr-3 between'><i class="fal fa-battery-half"></i> <i class="fal fa-signal-4"></i></p>
        </div>
        </div>
        <img src={model} alt="png" />
        <div className='BoxViwerI'>
        {!IsApp?
        <>
          <div className='BVMain'></div>
          <div className='BVRodape'>
            <div className='icon-Bar'>
              <AppIcon img='call' onclick={()=>{ativeAPP()}}/>
              <AppIcon img='contacts' />
              <AppIcon img='msg' />
              <AppIcon img='camera' />
            </div>
          </div>
          </>
          : <>
          <CallApp/>
          <div className='BarReturnExtern'><div className='BarRetunr' onClick={()=>ativeAPP()}></div></div></>}
          
          
        </div>
        
      </div>
    </div>
  );
}


export default App;
