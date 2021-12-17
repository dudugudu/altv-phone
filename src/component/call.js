import { useState, useEffect } from 'react'

import { Link ,useParams,useLocation} from "react-router-dom";
import React from 'react';




function  CallApp({setMain,setDesfoc,BackPage}) {
  const [Favorites,setFavorites] = useState(false);  
  const [Recents,setRecents] = useState(false); 
  const [Contacts,setContacts] = useState(false);
  const [KeyPad,setKeyPad] = useState(false);
  const{aba} = useParams();

  let contatos = [
    { "number": "925-252", "data": { "name": "Eduardo", "favorito": false } },
    { "number": "922-252", "data": { "name": "Andre", "favorito": false } },
    { "number": "932-252", "data": { "name": "Gustavo", "favorito": true } },
    { "number": "956-252", "data": { "name": "Xipanca", "favorito": false } },
    { "number": "967-252", "data": { "name": "Allan", "favorito": false } },
    { "number": "997-252", "data": { "name": "Nick", "favorito": false } }
]
let recents = [
  { "number": "925-252", "data": '1639666300104' },
  { "number": "922-252", "data": '1639667562581' },
  { "number": "932-252","data": '1639669094192' },
  { "number": "956-252", "data": '1639669176169' },
  { "number": "967-252","data": '1639669176169' },
  { "number": "997-252", "data": '1639669176169' },
  { "number": "997-252", "data": '1639589176169' },
]
  
 
  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  }, [])
  
  useEffect(() => {
    if (aba === 'dialpad') {
      setFavorites(false);setRecents(false);setContacts(false);setKeyPad(true);
    }else if (aba === 'contacts') {
      setFavorites(false);setRecents(false);setContacts(true);setKeyPad(false)
    }else if (aba === 'recents') {
      setFavorites(false);setRecents(true);setContacts(false);setKeyPad(false)
    }else if (aba === 'favourites') {
      setFavorites(true);setRecents(false);setContacts(false);setKeyPad(false)
    }
  }, [aba])

  let numberDisc= ''
  function NumberAdd(n) {
    numberDisc = numberDisc + n
    document.getElementById("NumberDisc").innerHTML = numberDisc;
  }
  function NumberRem() {
    numberDisc =  numberDisc.substring(0, numberDisc.length - 1);
   
    document.getElementById("NumberDisc").innerHTML = numberDisc;
  }
 
  function ViwerKeypad() {
    
   
    const [Backspace,setBackspace] = useState(false);
    function attBack() {
      let tm = numberDisc.length
      if (tm > 0) {
        setBackspace(true)
      }else{
        setBackspace(false)
      }
    }
    function Call() {
      alert(numberDisc)
    }
   return(<>
      <div className='BoxDisc' >
        <h1 id='NumberDisc'>{numberDisc}</h1>
      </div>
      <div className='BoxNumber'>
        <div className='LineNumber mb-2'>
          <Number caracter='' onclick={()=>{NumberAdd('1');attBack()}}>1</Number>
          <Number caracter='A B C' onclick={()=>{NumberAdd('2');attBack()}}>2</Number>
          <Number caracter='D E F' onclick={()=>{NumberAdd('3');attBack()}}>3</Number>
        </div>
        <div className='LineNumber mb-2'>
          <Number caracter='G H I' onclick={()=>{NumberAdd('4');attBack()}}>4 </Number>
          <Number caracter='J K L' onclick={()=>{NumberAdd('5');attBack()}}>5</Number>
          <Number caracter='M N O' onclick={()=>{NumberAdd('6');attBack()}}>6</Number>
        </div>
        <div className='LineNumber mb-2'>    
          <Number caracter='P Q R S' onclick={()=>{NumberAdd('7');attBack()}}>7</Number>
          <Number caracter='T U V' onclick={()=>{NumberAdd('8');attBack()}}>8</Number>
          <Number caracter='W X Y Z' onclick={()=>{NumberAdd('9');attBack()}}>9</Number>
          
        </div>
        <div className='LineNumber mb-2'>
          <div className='NumberCenter'  onClick={()=>{NumberAdd('*');attBack()}}>
          <i className="fal fa-asterisk"></i>
          </div>
          <div className='Number' onClick={()=>{NumberAdd('0');attBack()}}>
            <h1>0</h1>
            <p><i class="fal fa-plus"></i></p>
          </div>
          <div className='NumberCenter'  onClick={()=>{NumberAdd('#');attBack()}}>
            <i class="fal fa-hashtag"></i>
          </div> 
        </div>
        <div className='LineNumber mb-2'>
          <div className='FakeNumber'>
          {Backspace &&    
          <Link to={`/PhoneCallFull/Novocontato?lastpage=dialpad&number${numberDisc}`}>
            <i class="fal fa-plus"></i>
          </Link>}
          </div>
          <div className='NumberCenter green' onClick={()=>{Call()}}>
            <i class="material-icons white">call</i>
          </div> 
          <div className='FakeNumber'> 
            {Backspace &&   <i class="fal fa-backspace" onClick={()=>{NumberRem();attBack()}}></i>}
          </div>
        </div>
      </div>
   </>)
  }

  function ViwerFavorites() {
    
    return(<>
    <div className='FavouritessViweI'>
       <div className='between'>
        <h1>Favourites</h1>
       
       </div>
      </div>
      <div className='FavouritesViweII'>
               {contatos.map(function(obj){
                if(obj.data.favorito == true){
                    return (<CardFavourites db={obj}/>)
                }
            })}   
                 
     
      
      </div>
    
    </>)
  }
  function ViwerRecents() {
    
    return(<>
      <div className='RecentViweI'>
        <h1>Recentes</h1>
      </div>
      
      <div className='RecentViweII'>
        {recents.map(function (obj) {
          return contatos.map(function (objII) {
            if ( objII.number === obj.number) {
              return( <CardRecent db={objII} data={Temp(obj.data)}/>)
            }
          })
        })}
      
      </div>
    </>)
  }
  function ViwerContacts() {
  
   
    return(<>
     <div className='ContactsViweI'>
       <div className='between'>
        <h1>Contacts</h1>
        <Link to='/PhoneCallFull/Novocontato?lastpage=contacts'>
          <i class="fal fa-plus"></i>
        </Link>
       </div>
       <div className='input-grup'>
          <i class="fal fa-search ml-1"></i>
          <input className='Input ml-2' type="text" placeholder='Search' />
       </div>
      </div>
      <div className='ContactsViweII'>
      {contatos.map(data => <CardContact db={data}/>)}
               
                
      </div>
    </>)
  }

  function abrirSub(sub) {
    if (sub === 'dialpad' ) {
      document.getElementById('main').style.backgroundColor = '#ffffff';
      document.getElementById('main').style.backgroundImage = 'none';
    }
    
  }
  

  return (<>
  <div className='BVMainFull' >
          <div className="CallViwer">
         
            {Favorites && <ViwerFavorites/>}
            {Recents && <ViwerRecents/>}
            {Contacts && <ViwerContacts/>}
            {KeyPad && <ViwerKeypad/>}
          
          </div>
            
            <div className='CallTols'>
              <Link to="/PhoneCall/favourites">
                <div className='CallTolsIcon' >
                  <div className='j-c'>                  
                    <i class="fal fa-star"></i>
                  </div>
                  <p>Favorites</p>
                </div>
              </Link>
              <Link to="/PhoneCall/recents">
                <div className='CallTolsIcon'>
                  <div className='j-c'>                  
                  <i class="fal fa-clock"></i>
                  </div>
                  <p>Recents</p>
                </div>
              </Link>
              <Link to="/PhoneCall/contacts">
                <div className='CallTolsIcon'>
                  <div className='j-c'>                  
                  <i class="fal fa-user-circle"></i>
                  </div>
                  <p>Contacts</p>
                </div>
              </Link>
              <Link to="/PhoneCall/dialpad">
                <div className='CallTolsIcon'>
                  <div className='j-c'>     
                  <i class="material-icons">dialpad</i>  
                  </div>
                  <p>Keypad</p>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/">
          <div className='BarReturnExtern'><div className='BarRetunr' onClick={BackPage}></div></div>
          </Link>
    </>)
}





function Number({children,caracter,onclick}) {
  return(<><div className='Number' onClick={onclick}><h1>{children}</h1><p>{caracter}</p></div></>)
}

function CardRecent({db,data}) {
  return(<>
      <div className='CardRecente'>
        <div className='IconCard'>
          <i class="material-icons">phone_forwarded</i>
        </div>
        <div className='InfoCard a-c'>
          <div className='InfoBox'>
            <p className='name'>{db.data.name}</p>
            <p className='phone'>{db.number}</p>
          </div>
          <div className='InfoBox a-c mr-2'>
            <p className='time'>{data}</p>
            <Link to={`/PhoneCallFull/infoContacts?number=${db.number}&name=${db.data.name}&favorito=${db.data.favorito}&lastpage=recents`}>
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
      <div className='IconAcount' style={{ backgroundImage: 'url("https://cdn.discordapp.com/attachments/693519401999269949/920631582887411742/pp_2.jpg")'}} >
      </div>
      <div className='InfoCardFavourites a-c'>
          <p className='name '>{db.data.name}</p>
          <Link to={`/PhoneCallFull/infoContacts?number=${db.number}&name=${db.data.name}&favorito=${db.data.favorito}&lastpage=favourites`}>
            <i class="fal fa-info-circle mr-2"></i>
          </Link>
      </div>
    </div>
  </>)
}
function CardContact({db}) {
  return(<>
    <div className='CardContacts mt-1'>
      <Link to={`/PhoneCallFull/infoContacts?number=${db.number}&name=${db.data.name}&favorito=${db.data.favorito}&lastpage=contacts`}>
        <div className='InfoCardContacts a-c'>
            <p className='name mb-1'>{db.data.name}</p>
        </div>
      </Link>
    </div> 
  </>)
}

function Temp(n) {
  var temAtual = new Date().getTime();
  let final = temAtual - parseInt(n)
  let segunds = Math.floor(final / 1000 ) 
  let min = Math.floor(segunds / 60)
  let hr = Math.floor(min / 60)
  let dia = Math.floor(hr / 24)
  if (dia > 0 ) {
    return hr + " days ago"
  }else if (hr > 0 ) {
    return hr + " hours ago"
  }else if (min > 0) {
    return min + " minutes ago"
  }else if (segunds > 0) {
    return segunds + " seconds ago"
  }
}

export {
  CallApp
}