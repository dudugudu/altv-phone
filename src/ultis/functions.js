import { useLocation } from "react-router-dom";

const TimeFormat = (x) => {
    let s = x;
    let hr = Math.floor(s / 3600);
    s %= 3600;
    let min = Math.floor(s / 60);
    let sec = s % 60;
    min = String(min).padStart(2, "0");
    hr = String(hr).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    if (min <= 0) { return `${sec}` } else if (hr <= 0) { return `${min}:${sec}` } else { return `${hr}:${min}:${sec}` }
}

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}


const WhatTime = (n) => {
    var temAtual = new Date().getTime();
    let final = temAtual - parseInt(n)
    let segunds = Math.floor(final / 1000)
    let min = Math.floor(segunds / 60)
    let hr = Math.floor(min / 60)
    let dia = Math.floor(hr / 24)
    if (dia > 0) {
        return hr + " days ago"
    } else if (hr > 0) {
        return hr + " hours ago"
    } else if (min > 0) {
        return min + " minutes ago"
    } else if (segunds > 0) {
        return segunds + " seconds ago"
    }
}

const VerifyTxt = (txt) => {
    if (txt.length > 1) { return txt }
}

const FormatStringNumber = (n) => {
    
    if (n !== '' && n !== null && n!== undefined) {
        let t = n.split('');
        let count = 0;
        let formated = '';
        t.map((i) => { count++; if (count === 3 ||count === 6) { formated = formated + i + '-' } else { formated = formated + i }});
        return formated
    }
   
}


export default { TimeFormat, useQuery, WhatTime,  VerifyTxt, FormatStringNumber}