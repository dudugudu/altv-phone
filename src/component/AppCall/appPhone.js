import { useState, useEffect } from 'react'

import { Link } from "react-router-dom";
import React from 'react';
import{VwKeypad} from './Keypad'
import{VwContact} from './Contact'

import urp  from '../../ultis/main'

function  PhoneApp({setMain,setDesfoc,BackPage}) {
  
  const [Status,setStatus] = useState({I:true,II:false,III:false, IV:false});  
  const [Contact] = useState(urp.communication.GetContact());  
  const [Recents] = useState(urp.communication.GetRecents());  
  const [A,att] = useState(false);  
 
  let query = urp.Functions.useQuery()

  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  },[setMain,setDesfoc])

  useEffect(() => {
    let S = true
    switch (query.get('aba')) {
      case 'dialpad':
        setStatus({I:S,II:!S,III:!S, IV:!S})
        break;
      case 'contacts':
        setStatus({I:!S,II:S,III:!S , IV:!S})
        break;
      case 'recents':
        setStatus({I:!S,II:!S,III:S, IV:!S})
        break;
      case 'favourites':
        setStatus({I:!S,II:!S,III:!S, IV:S })
        break;
      default:
    }
  }, [A])
  
  function VwFavorite() {
    return(<>
      <div className='FavouritessViweI'>
        <div className='between'>
          <h1>Favourites</h1>
        </div>
      </div>
      <div className='FavouritesViweII'>
        { //Contact.map(function(obj){if(obj.data.favorito === true){ return (<CardFavourites db={obj}/>)}return(<></>)})
        }
      </div>  
    </>)
  }
  function VwRecent() {  
    return(<>
      <div className='RecentViweI'>
        <h1>Recentes</h1>
      </div>     
      <div className='RecentViweII'>
        { Recents.map(function (obj) {return ( <CardRecent db={obj} data={urp.Functions.WhatTime(obj.data)}/>  )} ).reverse()
        }
      </div>
    </>)
  }
  
  return (<>
    <div className='BVMainFull' >
      <div className="CallViwer">
        {Status.I && <VwKeypad/>}
        {Status.II && <VwContact/>}
        {Status.III &&<VwRecent/>}
        {Status.IV && <VwFavorite/>}
      </div>
      <div className='CallTols'>  
          <IconCallTools name='Favorites' to='/PhoneCallFull/PhoneApp?aba=favourites' onclick={()=>att(!A)}>star</IconCallTools>
          <IconCallTools name='Recents'  to='/PhoneCallFull/PhoneApp?aba=recents' onclick={()=>att(!A)}>schedule</IconCallTools>
          <IconCallTools name='Contacts' to='/PhoneCallFull/PhoneApp?aba=contacts' onclick={()=>att(!A)}>account_circle</IconCallTools>
          <IconCallTools name='Keypad' to='/PhoneCallFull/PhoneApp?aba=dialpad' onclick={()=>att(!A)}>dialpad</IconCallTools>
      </div>
    </div> 
    </>)
}

function IconCallTools({children,name,to,onclick}) {
  return(<>
    <Link to={to}>
      <div className='CallTolsIcon' onClick={onclick}>
        <div className='j-c'>     
          <i class="material-icons">{children}</i>  
        </div>
        <p>{name}</p>
      </div>
    </Link>  
  </>)
}



function CardRecent({db,data}) {
  return(<>
      <div className='CardRecente'>
        <div className='IconCard'>
          <i class="material-icons">phone_forwarded</i>
        </div>
        <div className='InfoCard a-c'>
          <div className='InfoBox'>
            <p className='name'>{db.name}</p>
            <p className='phone'>{db.number}</p>
          </div>
          <div className='InfoBox a-c mr-2'>
            <p className='time'>{data}</p>
            <Link to={`/PhoneCallFull/infoContacts?number=${db.number}&name=${db.name}&favorito=${''}&lastpage=recents`}>
              <i class="fal fa-info-circle ml-1"></i>
            </Link>
          </div>
        </div>
      </div>  
  </>)
}

function CardFavourites({db}) {
  return(<>
    <div className='CardFavourites mt-1'>
      <div className='IconAcount' style={{backgroundImage: 'url("https://cdn.discordapp.com/attachments/693519401999269949/920631582887411742/pp_2.jpg")'}}></div>
      <div className='InfoCardFavourites a-c'>
          <p className='name '>{db.data.name}</p>
          <Link to={`/PhoneCallFull/infoContacts?number=${db.number}&name=${db.data.name}&favorito=${db.data.favorito}&lastpage=favourites`}>
            <i class="fal fa-info-circle mr-2"></i>
          </Link>
      </div>
    </div>
  </>)
}



export {PhoneApp}

