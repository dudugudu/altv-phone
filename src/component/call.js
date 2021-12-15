import { useState } from 'react'
import { InputGroup ,InputLeftElement,Input } from '@chakra-ui/react'

function CallApp() {

  const [Favorites,setFavorites] = useState(false);  
  const [Recents,setRecents] = useState(false); 
  const [Contacts,setContacts] = useState(false);
  const [KeyPad,setKeyPad] = useState(true);
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
      <div className='BoxDisc'>
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
          <div className='FakeNumber'></div>
          <div className='NumberCenter green' onClick={()=>{Call()}}>
            <i class="fal fa-phone-alt"></i>
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
        <i class="fal fa-plus"></i>
       </div>
      </div>
      <div className='FavouritesViweII'>
               
        <CardFavourites/>
        <CardFavourites/>
        <CardFavourites/>
        <CardFavourites/>
        <CardFavourites/>
        <CardFavourites/>
        <CardFavourites/>
        <CardFavourites/>
        <CardFavourites/>
        <CardFavourites/>
        
      </div>
    
    </>)
  }
  function ViwerRecents() {
    return(<>
      <div className='RecentViweI'>
        <h1>Recentes</h1>
      </div>
      
      <div className='RecentViweII'>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
        <CardRecent/>
      
      </div>
    </>)
  }
  function ViwerContacts() {
    return(<>
     <div className='ContactsViweI'>
       <div className='between'>
        <h1>Contacts</h1>
        <i class="fal fa-plus"></i>
       </div>
       <div className='input-grup'>
          <i class="fal fa-search ml-1"></i>
          <input className='Input ml-2' type="text" placeholder='Search' />
       </div>
      </div>
      <div className='ContactsViweII'>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                
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
  <div className='BVMainApp'>
          
          <div className="CallViwer">
            {Favorites && <ViwerFavorites/>}
            {Recents && <ViwerRecents/>}
            {Contacts && <ViwerContacts/>}
            {KeyPad && <ViwerKeypad/>}
          
          </div>
            
            <div className='CallTols'>
              <div className='CallTolsIcon' onClick={()=>{setFavorites(true);setRecents(false);setContacts(false);setKeyPad(false)}}>
                <div className='j-c'>                  
                  <i class="fal fa-star"></i>
                </div>
                <p>Favorites</p>
              </div>
              <div className='CallTolsIcon' onClick={()=>{setFavorites(false);setRecents(true);setContacts(false);setKeyPad(false)}}>
                <div className='j-c'>                  
                <i class="fal fa-clock"></i>
                </div>
                <p>Recents</p>
              </div>
              <div className='CallTolsIcon' onClick={()=>{setFavorites(false);setRecents(false);setContacts(true);setKeyPad(false)}}>
                <div className='j-c'>                  
                <i class="fal fa-user-circle"></i>
                </div>
                <p>Contacts</p>
              </div>
              <div className='CallTolsIcon' onClick={()=>{setFavorites(false);setRecents(false);setContacts(false);setKeyPad(true);abrirSub('dialpad')}}>
                <div className='j-c'>     
                <i class="material-icons">dialpad</i>  
                </div>
                <p>Keypad</p>
              </div>
            </div>
          </div>
  
    </>)
}





function Number({children,caracter,onclick}) {
  return(<><div className='Number' onClick={onclick}><h1>{children}</h1><p>{caracter}</p></div></>)
}

function CardRecent({name,phone,history}) {
  return(<>
      <div className='CardRecente'>
        <div className='IconCard'>
          <i class="material-icons">phone_forwarded</i>
        </div>
        <div className='InfoCard a-c'>
          <div className='InfoBox'>
            <p className='name'>Eduardo</p>
            <p className='phone'>+49 991151546</p>
          </div>
          <div className='InfoBox a-c mr-2'>
            <p className='time'>21 hours ago</p>
            <i class="fal fa-info-circle ml-1"></i>
          </div>
        </div>
      </div>  
  </>)
}
function CardFavourites({}) {
  return(<>
    <div className='CardFavourites mt-1'>
      <div className='IconAcount'></div>
      <div className='InfoCardFavourites a-c'>
          <p className='name '>Eduardo</p>
          <i class="fal fa-info-circle mr-2"></i>
      </div>
    </div>
  </>)
}
function CardContact(params) {
  return(<>

    <div className='CardContacts mt-1'>
      <div className='InfoCardContacts a-c'>
          <p className='name mb-1'>Eduardo</p>
      </div>
    </div> 
  </>)
}

export {
  CallApp
}