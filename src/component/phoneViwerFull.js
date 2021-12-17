import { useState, useEffect } from 'react'
import { Link ,useParams} from "react-router-dom";
import {Call} from './AppCall/InCal'
import {AddContact} from './AppCall/addContact'
import {InfoContact} from './AppCall/infoContact'
import {PhoneApp} from './AppCall/appPhone'

function  PhoneFullViwer({setMain,setDesfoc,BackPage}) {
  const [Status,setStatus] = useState({I:false,II:false,III:false, IV:false});  
  const{appType} = useParams();

  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  },[setMain,setDesfoc])
  
  useEffect(() => {
    const S = true
    switch (appType) {
      case 'infoContacts':
        setStatus({I:S,II:!S,III:!S, IV:!S})
        break;
      case 'CallLink':
        setStatus({I:!S,II:S,III:!S , IV:!S})
        break;
      case 'Novocontato':
        setStatus({I:!S,II:!S,III:S, IV:!S})
        break;
      case 'PhoneApp':
        setStatus({I:!S,II:!S,III:!S, IV:S})
        break;
      default:
        break;
    }
  }, [appType])

  return (<>
      <div className='BVMainFull' >
          {Status.I && <InfoContact  setMain={setMain} setDesfoc={setDesfoc}/>}    
          {Status.II && <Call setMain={setMain} setDesfoc={setDesfoc}/>}    
          {Status.III && <AddContact setMain={setMain} setDesfoc={setDesfoc}/>}    
          {Status.IV && <PhoneApp setMain={setMain} setDesfoc={setDesfoc}/>}    
      </div>
      <Link to="/">
      <div className='BarReturnExtern'><div className='BarRetunr' onClick={BackPage}></div></div>
      </Link>
    </>)
}

export {
  PhoneFullViwer
}