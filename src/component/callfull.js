import { useState, useEffect } from 'react'

import { Link ,useParams,useLocation} from "react-router-dom";
import {Call } from './InCal'


function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function  CallFull({setMain,setDesfoc,BackPage}) {
  
 
  const [InfoContacts,setInfoContacts] = useState(false); 
  const [CallLink,setCallLink] = useState(false);  
  const [AddContato,setAddContato] = useState(false);  
  const{aba} = useParams();
  
 
  useEffect(() => {
   
    setMain({color:'#f8f7fc',img:'none'})
    
  }, [])
  
  useEffect(() => {
    if (aba === 'infoContacts') {
      setAddContato(false); setCallLink(false);setInfoContacts(true);
    }
    else if (aba === 'CallLink') {
      setAddContato(false); setCallLink(true);setInfoContacts(false)
    }
    else if (aba === 'Novocontato') {
      setAddContato(true); setCallLink(false);setInfoContacts(false)
    }
  }, [aba])

  
  

  return (<>
      <div className='BVMainFull' >
          {InfoContacts && <PGInfoContacts  setMain={setMain} setDesfoc={setDesfoc}/>}    
          {CallLink && <Call setMain={setMain} setDesfoc={setDesfoc}/>}    
          {AddContato && <PGAddContato setMain={setMain} setDesfoc={setDesfoc}/>}    
      </div>
      <Link to="/">
      <div className='BarReturnExtern'><div className='BarRetunr' onClick={BackPage}></div></div>
      </Link>
    </>)
}

function PGAddContato({setMain,setDesfoc}) {
  let query = useQuery()
  let favorito = query.get("favorito")
  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  }, [])
  return( 
    <div className='BoxMainInfoContactadd'>
     <label> 
       <Link to={`/PhoneCall/${query.get("lastpage")}`}>
       <p className='blueC'>Cacelar</p> 
       </Link>
     
       <p className='new Tx-a-c'>New Contact</p> 
       <Link to={`/PhoneCall/addcontact?nome=${'eduardo'}&sobrenome=${'gustavo'}&number=${'awd'}`}>
       <p className='Tx-a-r'>OK</p> 
       </Link>
      </label>
     <div className='FullContact'> <div className='PerfilContactsAdd'></div></div>
     <div className='FullContact'><p className='addFoto Tx-a-c blueC'>Adicionar Foto</p></div>
   
     <div className='CardContactsTools'>
       
      <div className='NumberCenterNovoContato'>
      <input type="text"  placeholder='Nome'/>
      </div>
      <div className='NumberCenterNovoContato'>
        <input type="text"  placeholder='Sobrenome'/>
      </div>
      <div className='NumberCenterNovoContato'>
        <input className='input' type="text"  placeholder='Phone'/>
      </div>
     </div>
    </div> )
}


function PGInfoContacts({setMain,setDesfoc}) {
  let query = useQuery()
  let favorito = query.get("favorito")
  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  }, [])
  return( 
    <div className='BoxMainInfoContact'>
     <label > 
       <Link to={`/PhoneCall/${query.get("lastpage")}`}>
       <i class="material-icons-outlined">chevron_left</i> 
       </Link>
       <p>Contacts</p>
       </label>
     <div className='FullContact'> <div className='PerfilContacts'></div></div>
     <div className='FullContact'>{query.get("name")}</div>
     <div className='FullContactII evenly'>
      <div className='NumberCenterContactsExt'>
        <div className='GlobalContactsTolls'>
          <div className='NumberCenterContacts'>
            <i class="material-icons">chat_bubble</i>
          </div>
        </div>
        <p>Message</p>
       </div>
       <div className='NumberCenterContactsExt'>
        <div className='GlobalContactsTolls'>
            <div className='NumberCenterContacts'>
              <i class="material-icons">local_phone</i>
            </div>
          </div>
          <p>Call</p>
       </div>
       <div className='NumberCenterContactsExt'>
          <div className='GlobalContactsTolls'>
            <div className='NumberCenterContacts'>
              <i class="material-icons">whatsapp</i>
            </div>
          </div>
          <p>WhatsApp</p>
       </div>
     </div>
     <div className='CardContactsTools'>
       
      <div className='CardContactInfoTools'>
          <p>Nome</p>
          <p className='blueC'>{query.get("name")} </p>
      </div>
      <div className='CardContactInfoTools'>
          <p>Phone</p>
          <p className='blueC'> {query.get("number")} </p>
      </div>
      <div className='CardContactInfoTools'>
        
          <p className='blueC'> Remove From Favourites </p>
      </div>
      <div className='CardContactInfoTools'>
        
          <p className='blueC'> Remove Contact</p>
      </div>

     </div>
    </div> )
}





export {
  CallFull
}