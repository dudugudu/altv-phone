import{ Link } from 'react-router-dom'
function MesageMain({setMain,setDesfoc}) {
  
  return(<>
    <div className='BoxMainMesages'>
    <label className='TopBar-Tools'> 
      <div className='flex'>

          <i class="material-icons-outlined blueC">chevron_left</i>
          <p className='blueC'>Back</p> 

      </div>  
          <p className='Tx-a-r'>OK</p> 
        
      </label>
      <div className='TitleViwer'>
        <h1>Mensagens</h1>
      </div>
      <div className='MensageViweII'>

      <div className='CardMensage '>
        <div className='IconAcountMensage' style={{backgroundImage: 'url("https://cdn.discordapp.com/attachments/693519401999269949/920631582887411742/pp_2.jpg")'}}></div>
        <div className='InfoCardMensage '>
            <label className='name between'>
              <p>555-524</p>
              <div className='leftMensage flex '> 
                <p className='mr-2'>10:40</p>
                <i class="material-icons-outlined">chevron_right</i>
              </div>
              </label>
              <p className='TxtAreaMensage'>Bem vindo Eduardo Voce foi premiado com o consorcio do bau </p>
          </div>
      </div>

      <div className='CardMensage '>
        <div className='IconAcountMensage' style={{backgroundImage: 'url("https://cdn.discordapp.com/attachments/693519401999269949/920631582887411742/pp_2.jpg")'}}></div>
        <div className='InfoCardMensage '>
            <label className='name between'>
              <p>555-524</p>
              <div className='leftMensage flex '> 
                <p className='mr-2'>10:40</p>
                <i class="material-icons-outlined">chevron_right</i>
              </div>
              </label>
              <p className='TxtAreaMensage'>Bem vindo Eduardo Voce foi premiado com o consorcio do bau </p>
          </div>
      </div>
     

     </div>
    </div>
  </>)
}
export{MesageMain}