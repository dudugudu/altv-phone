let ssn ='272676-2497'

let dbMessage =[
  {ssn: '272676-2497', menssage: 'Fala ai Andre como voce ta '},
  {ssn: '272676-249', menssage: 'E ai  Dudu eu to suave e vc'},
  {ssn: '272676-2497', menssage: 'To bem mano e tu comta indo o serviço '},
  {ssn: '272676-249', menssage: 'ta indo bem vou ageitar uma vaga pra vc '},
  {ssn: '272676-2497', menssage: 'ok agradeço mano '},
  {ssn: '272676-249', menssage: 'que isso '},
  {ssn: '272676-2497', menssage: 'Falando nisso viu Gustavinho aquele crime, esta sendo convertido '},
  {ssn: '272676-249', menssage: 'Ja sabia kkk muié ne pai'},
]


const GetMessage = ()=>{
  return dbMessage
}
const GetSSN = ()=>{
  return ssn
}

export default {GetMessage,GetSSN}