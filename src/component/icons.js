
import call   from '../img/icons/call.png'
import contacts   from '../img/icons/contacts.png'
import msg   from '../img/icons/messages.png'
import cam   from '../img/icons/camera.png'


function AppIcon({img,onclick}) {
  if (img === 'call') {
    return (<div className='iconAPP' style={{  backgroundImage: `url(${call})`}} onClick={onclick}></div>)
  } else if (img === 'contacts') {
    return (<div className='iconAPP' style={{  backgroundImage: `url(${contacts})`}} onClick={onclick}></div>)
  } else if (img === 'camera') {
    return (<div className='iconAPP' style={{  backgroundImage: `url(${cam})`}} onClick={onclick}></div>)
  } else if (img === 'msg') {
    return (<div className='iconAPP' style={{  backgroundImage: `url(${msg})`}} onClick={onclick}></div>)
  } else if (img === '') {
    
  } else if (img === '') {
     
  } else if (img === '') {
    
  } else if (img === '') {
    
  }

  return(<></>)
  
    }
  



    export {
      AppIcon
    } 