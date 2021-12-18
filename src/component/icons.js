
import call   from '../img/icons/call.png'
import contacts   from '../img/icons/contacts.png'
import msg   from '../img/icons/messages.png'
import cam   from '../img/icons/camera.png'

import { Link } from "react-router-dom";

function AppIcon({img,onclick,to}) {
  if (img === 'call') {
    return (<Link to={to}> <div  className='iconAPP' style={{  backgroundImage: `url(${call})`}} onClick={onclick}></div></Link>)
  } else if (img === 'contacts') {
    return (<Link to={to}><div className='iconAPP' style={{  backgroundImage: `url(${contacts})`}} onClick={onclick}></div></Link>)
  } else if (img === 'camera') {
    return (<Link to={to}><div className='iconAPP' style={{  backgroundImage: `url(${cam})`}} onClick={onclick}></div></Link>)
  } else if (img === 'msg') {
    return (<Link to={to}><div className='iconAPP' style={{  backgroundImage: `url(${msg})`}} onClick={onclick}></div></Link>)
  } else if (img === '') {
    
  } else if (img === '') {
     
  } else if (img === '') {
    
  } else if (img === '') {
    
  }

  return(<></>)
  
    }
  

    function Icon({name,w,h,ml,mr}) {
      switch (name) {
        case 'menssage':
          return(<div   style={{  backgroundImage: `url(${msg})` ,width:w,height:h,backgroundSize:'100%',marginLeft:ml,marginRight:mr}}></div>)
      
        default:
          break;
      }
      
    }


    export {
      AppIcon,
      Icon
    } 