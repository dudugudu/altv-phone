import {  useEffect } from 'react'
import { Link } from "react-router-dom";
import {useQuery} from '../../ultis/functions'

function AddContact({setMain,setDesfoc}) {
  let query = useQuery()
  //let favorito = query.get("favorito") -- a adicionar
  useEffect(() => {
    setMain({color:'#f8f7fc',img:'none'})
    setDesfoc('none')
  },[setMain,setDesfoc])

  return(<>
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
      <div className='FullContact'><div className='PerfilContactsAdd'></div></div>
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
    </div>
  </>)
}

export {AddContact}
