import {SoundChamada}from '../celphoneextras'

let dbMessage = []
let contatos = []
let recents = []
let history_message = []
let myNumber 
let ssn 



const VerifyNumber = (n) => {
    let exist = false;
    contatos.map((obj) => {
        if (obj.number === n) { exist = true; }
    })
    if (!exist) { return false }
    return true
}

const GetSSN = () => {
    return ssn
}
const GetHistory = () => {
    return history_message
}


const GetContact = () => {
    return contatos
}

const GetRecents = () => {
    return recents
}


const GetMessage = () => {
    return dbMessage

}
const GetChatId = (chat_id) => {
    
      // eslint-disable-next-line no-undef
      alt.emit('Phone:GetChatMessage',chat_id)
}


const SaveContact = (data) => {

    if (!VerifyNumber(data.number)) {
        contatos.push(data)
        
        setTimeout(() => {
            // eslint-disable-next-line no-undef
            alt.emit('Phone:UpdateContact',ssn,contatos)
          
        }, 100);
        return true
    } else {
        return false
    }  
}

const DeleteContact = (number) => {
    const result = contatos.filter(obj => obj.number !== number)
    contatos = result
    console.log(result);
    setTimeout(() => {
        // eslint-disable-next-line no-undef
        alt.emit('Phone:UpdateContact',ssn,contatos)
      
    }, 100);
}


const CallNumber = (number) => { // pronto
    // eslint-disable-next-line no-undef
    alt.emit('Phone:CallLink',number)
}



const AceptCall = (number) =>{ //pronto
console.log(number);
    SoundChamada({type:'stop'});
    // eslint-disable-next-line no-undef
    alt.emit('Phone:CallAcept',number)
}

const CheckAtlV = () => {
    if (window.alt !== undefined) { return true } else { return false }
}


const DestroyCall = (chanelName,phone,inChanel)=>{
    
    if (chanelName == myNumber) {
        // eslint-disable-next-line no-undef
        alt.emit('Phone:DestroyCallMy',chanelName,phone,inChanel)
        
    }else{
        // eslint-disable-next-line no-undef
        alt.emit('Phone:DestroyCall',chanelName)
        
    }
}

const MyNumber = ()=>{ //pronto
    return myNumber
}


const VerifyContact = (n) => { //pronto
    let exist = false;
    let final = '';
    contatos.map((obj) => { 
        if ( parseInt(obj.number) === parseInt(n)) { exist = true; final = obj.data.name  } });
    if (!exist) { final = n }
    return final
}
const InserRecents = (number) => {
    if (recents.length >= 35 ) {
        for (let i = 0; i < 10; i++) {
            recents.pop(i)
        }
    }
    recents.push({ "number": number,name:VerifyContact(number), "data": new Date().getTime() })
    setTimeout(() => {
        // eslint-disable-next-line no-undef
        alt.emit('Phone:UpdateRecents',ssn,recents)
      
    }, 100);
}

const WhatPhone =(chat_id)=>{
    let final = ''
     history_message.map((obj)=>{
         if (obj.id === chat_id) {
             if (parseInt(obj.id_player_one) === parseInt(myNumber)) {
                final = obj.id_player_two 
             }else if (parseInt(obj.id_player_two) === parseInt(myNumber)) {
                final = obj.id_player_one 
             }
         }
     })
     return final
 }

 const VerifyCharacter = (txt) => {
     let limit = 75
     if(txt<=1 || txt === null || txt === undefined || txt === '') return 
     if (txt.length >= 2) {
         let letra = txt.split('');
         let count = 0;
         let formated =''
         letra.map((i)=>{count ++;if (count === limit ) { formated = formated + i + '...' }else if (count<limit) { formated = formated + i } })
         return formated
     }
     
 }


// eslint-disable-next-line no-undef
alt.on('Phone:GetAllData', (DataContact,DataRecent,DataHistory,DataNumber,DataSsn) => { //pronto
    console.log('[PHONE] Loading...');
    if (DataContact[0].contact !== '') {
        contatos = JSON.parse(DataContact[0].contact);
        console.log('[PHONE] Loading Finish Contact');
    }
    if (DataRecent[0].recent !== '') {
        recents = JSON.parse(DataRecent[0].recent); 
        console.log('[PHONE] Loading Finish Recent');
    }
    if (DataHistory !== '') {
        history_message = DataHistory; 
        console.log('[PHONE] Loading Finish History');      
    }
    myNumber = DataNumber; 
    console.log('[PHONE] Loading Finish Number');
    ssn = DataSsn; 
    console.log('[PHONE] Loading Finish Ssn');
})


const CreateMessage = (type,message,chat_id,phone)=>{
    // eslint-disable-next-line no-undef
    alt.emit('Phone:CreateMessage',type,message,chat_id,phone)
     // eslint-disable-next-line no-undef
     alt.emit('Phone:updatecontain',phone)

     history_message.push({ id:chat_id,id_player_one:myNumber,id_player_two:phone,contain_message: 1})
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    GetMessage,
    GetSSN,
    CheckAtlV,
    GetContact,
    SaveContact,
    CallNumber,
    AceptCall,
    GetRecents,
    VerifyContact,
    DestroyCall,
    MyNumber,
    CreateMessage,
    GetHistory,
    GetChatId,
    WhatPhone,
    DeleteContact,
    InserRecents,
    VerifyCharacter
    
}