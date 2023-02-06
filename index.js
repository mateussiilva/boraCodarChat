


function getDataHoraAtual(){
    const elemento = document.querySelector("#last-seen")
    const data = new Date()
    const diaDaSemana = data.toLocaleDateString()
    const hora = data.toLocaleTimeString('pt-br', {
        hour12:false,
    }).split('').slice(0,5).join('')
    
    return elemento.innerHTML = `${diaDaSemana} - ${hora}`
}

const messages = document.querySelector(".messages")

try{
    messages.lastElementChild.scrollIntoView()
}catch(e){}


getDataHoraAtual()


const arrayMessages = document.querySelectorAll(".messages")



document.addEventListener('submit', e => {
    e.preventDefault() // Bloqueia o envio do envento

    const message = document.querySelector("#input-message").value
    
    if (message.length !== 0){
        console.log(message)
        message.value = ' '
        
    }

})

