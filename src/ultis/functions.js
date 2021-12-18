
import { useLocation } from "react-router-dom";


let contatos = [
  { "number": 925252, "data": { "name": "Eduardo", "favorito": false } },
  { "number": 922252, "data": { "name": "Andre", "favorito": false } },
  { "number": 932252, "data": { "name": "Gustavo", "favorito": true } },
  { "number": 956252, "data": { "name": "Xipanca", "favorito": false } },
  { "number": 967252, "data": { "name": "Allan", "favorito": false } },
  { "number": 997252, "data": { "name": "Nick", "favorito": false } }
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


export function GetContact() { 
  return contatos
}
export function GetRecents() {
  return recents
}


export function TimeFormat(x) {
  let s = x;  let hr = Math.floor(s / 3600);  s %= 3600;  let min = Math.floor(s / 60);  let sec = s % 60;
  min = String(min).padStart(2, "0");  hr = String(hr).padStart(2, "0");  sec = String(sec).padStart(2, "0");  
  if (min <= 0) {return `${sec}`}else if (hr <=0) {return `${min}:${sec}`}else { return `${hr}:${min}:${sec}`}
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function CallNumber(n) {
  //alt.emit()
}
export function WhatTime(n) {
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


function ModifierURL(URL){
  window.history.pushState({}, undefined, `${URL}`);
 
  setTimeout(() => {
    window.location.reload()
  }, 2);
}

export function ReceivingCall() {

  ModifierURL(`/PhoneCallfull/CallLink?number=${92252}`)
}