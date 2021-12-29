import React from 'react';
import { useState, useEffect } from 'react'
import urp  from '../../ultis/main'

import { Cicle,Icon} from '../Tools/Componnests'

function VwKeypad() {
  const [GTZ,setGTZ] = useState(false);
  const [NumberDisc,setNumberDisc] = useState('');  
 

  useEffect(() => {
    let tm = NumberDisc.length
    tm > 0 ? setGTZ(true) :setGTZ(false)
  }, [NumberDisc])

  function NumberAdd(n) {
    if (NumberDisc.length <9) {
      setNumberDisc(NumberDisc+ n)
    }
  }

  return(<>
      <div className='BoxDisc' >
        <h1 id='NumberDisc'>{urp.Functions.FormatStringNumber(NumberDisc)}</h1>
      </div>
      <div className='BoxNumber'>
        <div className='LineNumber mb-2'>
          <Number caracter='' onclick={()=>{NumberAdd('1')}}>1</Number>
          <Number caracter='A B C' onclick={()=>{NumberAdd('2')}}>2</Number>
          <Number caracter='D E F' onclick={()=>{NumberAdd('3')}}>3</Number>
        </div>
        <div className='LineNumber mb-2'>
          <Number caracter='G H I' onclick={()=>{NumberAdd('4')}}>4 </Number>
          <Number caracter='J K L' onclick={()=>{NumberAdd('5')}}>5</Number>
          <Number caracter='M N O' onclick={()=>{NumberAdd('6')}}>6</Number>
        </div>
        <div className='LineNumber mb-2'>    
          <Number caracter='P Q R S' onclick={()=>{NumberAdd('7')}}>7</Number>
          <Number caracter='T U V' onclick={()=>{NumberAdd('8')}}>8</Number>
          <Number caracter='W X Y Z' onclick={()=>{NumberAdd('9')}}>9</Number>
        </div>
        <div className='LineNumber mb-2'>
          <div className='NumberCenter'  onClick={()=>{NumberAdd('*')}}>
            <i className="fal fa-asterisk"></i>
          </div>
          <div className='Number' onClick={()=>{NumberAdd('0')}}>
            <h1>0</h1>
            <p><i class="fal fa-plus"></i></p>
          </div>
          <div className='NumberCenter'  onClick={()=>{NumberAdd('#')}}>
            <i class="fal fa-hashtag"></i>
          </div> 
        </div>
        <div className='LineNumber mb-2'>
          <div className='FakeNumber'>
            {GTZ &&<Icon to={`/PhoneCallFull/Novocontato?lastpage=dialpad&number=${NumberDisc}`} color='#0179fe' fontsize='26px'>add</Icon> }
          </div>
          <Cicle to={`/PhoneCallfull/CallLink?number=${NumberDisc}&recebendo=false&chamada=true`} fontsize='26px' d='50px' onclick={()=>{urp.communication.CallNumber(NumberDisc);urp.communication.InserRecents(NumberDisc)}} bcolor='#35c759' cursor>call</Cicle>
          <div className='FakeNumber'> 
            {GTZ &&<Icon onclick={()=>{setNumberDisc( NumberDisc.substring(0, NumberDisc.length - 1))}}>backspace</Icon>}
          </div>
        </div>
      </div>
  </>)
}

function Number({children,caracter,onclick}) {
  return(<><div className='Number' onClick={onclick}><h1>{children}</h1><p>{caracter}</p></div></>)
}

export{VwKeypad}