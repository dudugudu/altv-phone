import './App.css';
import React from 'react';
import model   from './img/iphone.png'
import { AppIcon,Icon } from './component/icons'
import{PhoneFullViwer} from './component/phoneViwerFull'
import { Routes, Route } from "react-router-dom";
import {useState,useEffect} from'react'
import {motion} from 'framer-motion'
import {ReceivingCall} from './ultis/functions'
import { Button } from '@chakra-ui/react'
import{ External} from './celphoneextras'
import {PlayerOn} from './celphoneextras'


function App() {
  const [Main, setMain] = useState({color:'transparent',img:'url(/static/media/walpaper.04f956eb.jpg)',filter:'blur(0)'})
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

function HomeCell({setMain,setDesfoc,calback}) {
  useEffect(() => {
    setMain({color:'transparent',img:'url(/static/media/walpaper.04f956eb.jpg)'})
    setDesfoc('none')
  },[setMain,setDesfoc])
 
  return(<>
    <div className='BVMain'>
      <div  className='j-c'>
        <div>
        <motion.div
          initial={{ opacity: 0, y: 5 ,left:1}}
          animate={{ opacity: 1, y: 15,left:0 }}
          transition={{
            type: "spring",
            stiffness: 10,
            damping: 12,
          }}
          className="container-main-rg"
        ><div className='ExtNotify'>
            <div className='topbarNotification'>
              <Icon name='menssage' w='12px' h='12px' ml='5px'/>
              <p className='titleNotify'>MESSAGES</p>
              </div>
            <div className='CorpNotifi'>
              <p className='corpoTXTpincipla'>Dudu</p>
              <p className='txtMensage'>E ai como esta o celular?</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 ,left:1}}
          animate={{ opacity: 1, y: 15,left:0 }}
          transition={{
            type: "spring",
            stiffness: 10,
            damping: 12,
          }}
          className="container-main-rg"
        ><div className='ExtNotify'>
            <div className='topbarNotification'>
              <Icon name='menssage' w='12px' h='12px' ml='5px'/>
              <p className='titleNotify'>MESSAGES</p>
              </div>
            <div className='CorpNotifi'>
              <p className='corpoTXTpincipla'>Ximpanca</p>
              <p className='txtMensage'>Poh curti pra caramba esse visu!</p>
            </div>
          </div>
        </motion.div>
      </div>

      </div>
    

    </div>
      <div className='BVRodape'>
        <div className='icon-Bar'>
          <AppIcon img='call' to='/PhoneCallFull/PhoneApp'/>
          <AppIcon img='contacts' to='/PhoneCallFull/PhoneApp?aba=contacts'/>
          <AppIcon img='msg' to='/PhoneCallFull/Mesage'/>
          <AppIcon img='camera' to='/camera'/>
        </div>
      </div>
      <PlayerOn/>
  </>)
}

export default App;
