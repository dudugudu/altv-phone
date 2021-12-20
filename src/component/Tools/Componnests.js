import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Profile from '../../img/icons/perfil.png'


Icon.propTypes ={
  children: PropTypes.string || PropTypes.any,
  color:PropTypes.string,
  fontsize:PropTypes.string,
  outlined:PropTypes.bool,
  ml:PropTypes.string,
  mr:PropTypes.string,
  cursor:PropTypes.bool,
  to:PropTypes.string,
}

function Icon({children,color,fontsize,outlined,ml,mr,cursor,to,onclick}){
  return(<>
    <Link to={`${to?to:[]}`} ><i 
    onClick={onclick&&onclick}
    className={outlined? 'material-icons-outlined':'material-icons'} 
    style={{color:color?color :'black',fontSize:fontsize?fontsize:'16px',marginLeft:ml?ml:'0',marginRight:mr?mr:'0',cursor:cursor?'pointer':'auto'}}>{children}</i>
    </Link>
  </>)
}

Iconprofile.propTypes ={
  width: PropTypes.string,
  height:PropTypes.string,
}

function Iconprofile({width,height}) {
  return(<>
  <div className='Backgroud' style={{ width: width? width:'35px', height:height? height:'35px', backgroundImage: `url(${Profile})`}} alt="png" />
  </>)
}


function MsgLeft({children}) {
  return(<>
    <div style={{width:'100%',display:'flex',justifyContent:'flex-start'}}><div style={{backgroundColor:'#bebebe',marginLeft:'5px'}} className='Bx-msg'>{children}</div></div>
  </>)
}


function MsgRight({children}) {
  return(<>
     <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}><div style={{backgroundColor:'#35c759',color:'#fff',marginRight:'5px'}} className='Bx-msg'>{children}</div></div>
  </>)
}

BoxMessage.propTypes ={
  height:PropTypes.string,
  bcolor: PropTypes.string,
  overflow: PropTypes.bool,
  id: PropTypes.string,
  bt: PropTypes.bool,
  bb: PropTypes.bool,
}


function BoxMessage({children,height,bcolor,overflow,id,bt,bb}) {
  return(<>
  <div style={{padding:' 0 0 5px 0', height: height? height:'100px',borderTop:bt?'1px solid #e5e5e5':'none',borderBottom:bb?'1px solid #e5e5e5':'none'}}>
    <div id={id} style={{display:'block', width:'100%',height:'100%', backgroundColor:bcolor?bcolor:'transparent',overflow:overflow?'auto':'hiden' }}>{children}</div>
  </div>
  </>)
}


 export {Icon,Iconprofile,MsgRight,MsgLeft,BoxMessage}