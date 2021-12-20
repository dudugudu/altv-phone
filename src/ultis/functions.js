
import { useLocation } from "react-router-dom";

import { useNavigate,Route } from 'react-router-dom';


import ReactDOM from 'react-dom';
let contatos = [
  { "number": '925252', "data": { "name": "Eduardo", "favorito": false } },
  { "number": '922252', "data": { "name": "Andre", "favorito": false } },
  { "number": '932252', "data": { "name": "Gustavo", "favorito": true } },
  { "number": '956252', "data": { "name": "Xipanca", "favorito": false } },
  { "number": '967252', "data": { "name": "Allan", "favorito": false } },
  { "number": '997252', "data": { "name": "Nick", "favorito": false } }
]
let recents = [
  { "number": '925252', "data": '1639666300104' },
  { "number": '922252', "data": '1639667562581' },
  { "number": '932252',"data": '1639669094192' },
  { "number": '956252', "data": '1639669176169' },
  { "number": '967252',"data": '1639669176169' },
  { "number": '997252', "data": '1639669176169' },
  { "number": '997252', "data": '1639589176169' },
]
const GetContact = () => { 
  return contatos
}
const GetRecents = () => {
  return recents
}


const TimeFormat = (x) => {
  let s = x;  let hr = Math.floor(s / 3600);  s %= 3600;  let min = Math.floor(s / 60);  let sec = s % 60;
  min = String(min).padStart(2, "0");  hr = String(hr).padStart(2, "0");  sec = String(sec).padStart(2, "0");  
  if (min <= 0) {return `${sec}`}else if (hr <=0) {return `${min}:${sec}`}else { return `${hr}:${min}:${sec}`}
}

const useQuery = ()=> {
  return new URLSearchParams(useLocation().search);
}

const CallNumber = (n) =>{
  //alt.emit()
}
const WhatTime = (n) =>{
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


const  ModifierURL =(URL) =>{
 
  console.log(URL);
  /*
  window.history.pushState({}, undefined, `${URL}`);
 
  setTimeout(() => {
    window.location.reload()
  }, 100);*/
}

const ReceivingCall = () => {
  ModifierURL(`/PhoneCallfull/CallLink?number=${925822}`)
}
const VerifyContact = (n) =>{
  let contact = GetContact();let exist = false;let final = '';contact.map((obj)=>{ if (obj.number === parseInt(n) ) { exist = true;  final = obj.data.name }});if (!exist) {final = n } return FormatStringNumber(final)
}
const FormatStringNumber = (n) => {
  let t = n.split('');let count = 0;let formated = '';t.map((i) => {count ++;if (count === 3   ) {formated = formated  +i+ '-'}else{formated = formated + i}});
  return formated
}

const SaveContact = (data) => {
 if (!VerifyNumber(data.number)) {
  contatos.push(data)
  return true
 }else{
   return false
 }
}

const teste =(params)=> {
  console.log(params);
}
const VerifyNumber =(n)=>{
  let exist = false;
  contatos.map((obj)=>{
    if (obj.number === n) {exist= true;}
  })
  if (!exist) {return false}
  return true
}
const VerifyTxt =(txt)=>{
 if (txt.length > 1) { return txt}
}

export default {GetContact, GetRecents,TimeFormat,useQuery,CallNumber,WhatTime,ReceivingCall,VerifyContact,SaveContact,FormatStringNumber,ModifierURL,VerifyTxt}