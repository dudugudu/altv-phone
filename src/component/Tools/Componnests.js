import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Profile from '../../img/icons/perfil.png'


Icon.propTypes ={
  children: PropTypes.string || PropTypes.any,
  color:PropTypes.string,
  fontsize:PropTypes.string,
  outlined:PropTypes.bool,
  Margin:PropTypes.string,
  to:PropTypes.string,
}

function Icon({children,color,fontsize,outlined,Margin,cursor,to,onclick}){
  return(<>
    <Link 
    to={`${to?to:[]}`} ><i 
    onClick={onclick&&onclick} 
    className={outlined? 'material-icons-outlined':'material-icons'} 
    style={{color:color?color :'black',fontSize:fontsize?fontsize:'16px',margin:Margin?Margin:'0',cursor:cursor?'pointer':'auto'}}>{children}</i></Link>
  </>)
}

Iconprofile.propTypes ={
  width: PropTypes.string,
  height:PropTypes.string
}

function Iconprofile({width,height}) {
  return(<>
  <div 
  className='Backgroud' 
  style={{ width: width? width:'35px', height:height? height:'35px', backgroundImage: `url(${Profile})`}} />
  </>)
}

MsgLeft.propTypes ={
  type:PropTypes.string,
}

function MsgLeft({children,type}) {
  return(<>
    <div style={{width:'100%',display:'flex',justifyContent:'flex-start'}}><div style={{backgroundColor:'#bebebe',marginLeft:'5px'}} className='Bx-msg'>{children}</div></div>
  </>)
}

MsgRight.propTypes ={
  type:PropTypes.string,
}

function MsgRight({children,type}) {
  return(<>
     <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}><div style={{backgroundColor:'#35c759',color:'#fff',marginRight:'5px'}} className='Bx-msg'>{children}</div></div>
  </>)
}

LineInfo.propTypes ={
  title:PropTypes.string,
  onclick: PropTypes.any,
  Scolor: PropTypes.string,
  Pcolor: PropTypes.string,
}

function LineInfo({children,title,onclick,Pcolor,Scolor}) {
  return(<><div style={{padding:' 5px 10px', borderBottom:'1px solid #acacac',color:Pcolor?Pcolor:'black'}} ><p>{title}</p><p style={{color: Scolor?Scolor:'#0179fe'}} onClick={onclick}> {children} </p></div></>)
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

SpaceBetween.propTypes ={
  width:PropTypes.string,
  bcolor:PropTypes.string,
  color:PropTypes.string,
  acenter:PropTypes.string,
  padding: PropTypes.string
}

function SpaceBetween({children,width,bcolor,color,acenter,padding}) {
  return(<><div 
    style={{width:width?width:'100%',backgroundColor:bcolor?bcolor:'transparent',color:color?color:'black', alignItems:acenter?'center':'start',padding:padding?padding:'0'}}>{children}</div></>)
}
SpaceAround.propTypes ={
  width:PropTypes.string,
  bcolor:PropTypes.string,
  color:PropTypes.string,
  acenter:PropTypes.string,
  padding: PropTypes.string
}
function SpaceAround({children,width,bcolor,color,acenter,padding}) {
  return(<><div 
    style={{width:width?width:'100%',backgroundColor:bcolor?bcolor:'transparent',color:color?color:'black', alignItems:acenter?'center':'start',padding:padding?padding:'0'}}>{children}</div></>)
}
SpaceEvenly.propTypes ={
  width:PropTypes.string,
  bcolor:PropTypes.string,
  color:PropTypes.string,
  acenter:PropTypes.string,
  padding: PropTypes.string
}
function SpaceEvenly({children,width,bcolor,color,acenter,padding}) {
  return(<><div style={{display:'flex',justifyContent:'space-evenly', width:width?width:'100%',backgroundColor:bcolor?bcolor:'transparent',color:color?color:'black', alignItems:acenter?'center':'start',padding:padding?padding:'0'}}>{children}</div></>)
}
Center.propTypes ={
  width:PropTypes.string,
  bcolor:PropTypes.string,
  color:PropTypes.string,
  acenter:PropTypes.string,
  padding: PropTypes.string
}
function Center({children,width,bcolor,color,acenter,padding}) {
  return(<><div style={{display:'flex',justifyContent:'center', width:width?width:'100%',backgroundColor:bcolor?bcolor:'transparent',color:color?color:'black', alignItems:acenter?'center':'start',padding:padding?padding:'0'}}>{children}</div></>)
}

Cicle.propTypes ={
  children: PropTypes.string || PropTypes.any,
  color:PropTypes.string,
  d:PropTypes.string,
  bcolor:PropTypes.string,
  fontsize:PropTypes.string,
  outlined:PropTypes.bool,
  ml:PropTypes.string,
  mr:PropTypes.string,
  cursor:PropTypes.bool,
  to:PropTypes.string,
}

function Cicle({children,d,color,fontsize,bcolor,outlined,ml,mr,cursor,to,onclick}) {
  return(<><Link to={`${to}`}><div onClick={onclick} style={{display:'flex', justifyContent:'center', alignItems:'center', color:color?color:'white',width:d,height:d,backgroundColor:bcolor?bcolor:'#0179fe',borderRadius:'50%',marginLeft:ml?ml:'0',marginRight:mr?mr:'0',cursor:cursor?'pointer':'auto'}}><div style={{fontSize:fontsize?fontsize:'16px'}} className={outlined? 'material-icons-outlined':'material-icons'}>{children}</div></div></Link>
  </>)
}

IconTxt.propTypes ={
  title: PropTypes.string,
  to: PropTypes.string,
  onclick:PropTypes.any,
  bcolor:PropTypes.string,
  colorCicle:PropTypes.string,
  color: PropTypes.string
}
function IconTxt({children,title,to,onclick,bcolor,colorCicle,color}) {
  return(<>
    <div>
      <Center width='50px'> 
        <Cicle onClick={onclick} to={`${to}`} backgroundColor={bcolor?bcolor:'#0179fe'} color={colorCicle?colorCicle:'#fff'} fontsize='17px'  d='30px'>{children}</Cicle>
      </Center>
      <p style={{ paddingTop:'2px',color:color?color:'#929292', fontSize:'8px',width:'100%',textAlign:"center",fontWeight:'600'}} >{title}</p>
    </div>
  </>)
}

Text.propTypes ={
  width: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  txtaling: PropTypes.string,
  to: PropTypes.string,
  onclick: PropTypes.any,
  cursor: PropTypes.bool,
}
function Text({children,width,margin,color,txtaling,to,onclick,cursor}) {
  return( <>
  <Link to={`${to}`} ><p onClick={onclick} style={{margin:margin?margin:'0',cursor:cursor?cursor:'auto', width:width?width:'100%',color:color?color:'#0179fe',textAlign:txtaling?txtaling:'center'}}>{children}</p></Link>
  </>)
}


function TopBar({children,childrenLeft,childrenRight}) {
  return(<>
   <div style={{display:'flex', width:'240px',padding:'10px 5px',fontSize:'13px',fontWeight:'600'}}>
    <div style={{ width:'75px' }}>{childrenLeft}</div>
    <div style={{ width:'80px' }}>{children}</div>
    <div style={{ width:' 75px' }}>{childrenRight}</div>
   </div>
  </>)
}


export  {Icon,Iconprofile,MsgRight,MsgLeft,BoxMessage,LineInfo,Cicle,SpaceBetween,SpaceAround,SpaceEvenly,Center,IconTxt,TopBar,Text}