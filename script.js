//BOX 1
let contestGeneral = false
let box1 = document.getElementById('box1')
let boxOutput = document.getElementById('output')
let boxCheck = document.getElementById('button-check')

//BOX 2
let box2 = document.getElementById('box2')
let boxOutput2 = document.getElementById('input')
let boxCheck2 = document.getElementById('button-check2')
let contesteGeneral2 = false

//Box Contacted
let contactedOutput = false



function boxGeneral() {
    const boxOutput = document.getElementById('output')
    const boxCheck = document.getElementById('button-check')

    if(contesteGeneral2 === true) {
        boxCheck2.style.display = 'none'
        boxOutput2.style.display = ''
        box2.style.backgroundColor = '#ffffff'
        box2.style.outline = ''
    }

    if(boxOutput.style.display = 'none'){
        boxOutput.style.display = 'none'
        boxCheck.style.display = 'inline'
        box1.style.backgroundColor = '#e0f1e7'
        box1.style.outline = '2px solid #2c6d59'
        contestGeneral = true
    }
    //FAZER O REVERSO
}

function boxGeneral2() {
    const boxOutput2 = document.getElementById('input')
    const boxCheck2 = document.getElementById('button-check2')
    
    if(contestGeneral === true) {
        boxCheck.style.display = 'none'
        boxOutput.style.display = ''
        box1.style.backgroundColor = '#ffffff'
        box1.style.outline = ''
        
        box2.style.backgroundColor = '#e0f1e7'
        box2.style.outline = '2px solid #2c6d59'
        boxOutput2.style.display = 'none'
        boxCheck2.style.display = 'inline'

        contesteGeneral2 = true
    }

    else if(contestGeneral === false) {
        boxOutput2.style.display = 'none'
        boxCheck2.style.display = 'inline'
        box2.style.outline = '2px solid #2c6d59'

        contesteGeneral2 = true
    }
}

function consentContacted() {
    const faSquare = document.getElementById('fa-square')
    const checkContacted = document.getElementById('consent-contacted')

    if(checkContacted.style.display = 'none') {
        faSquare.style.display = 'none'
        checkContacted.style.display = 'inline'
        contactedOutput = true
    }
}

function consentContacted2() {
    const faSquare = document.getElementById('fa-square')
    const checkContacted = document.getElementById('consent-contacted')

    if(checkContacted.style.display = 'inline') {
        checkContacted.style.display = 'none'
        faSquare.style.display = 'inline'
        contactedOutput = false
    }
}

//Fim das funções para os botões BOX

//Inicio do menssage-fault
    //Init First Name
document.addEventListener('DOMContentLoaded', function() {
    let blockNameFirst = document.getElementById('name-first')
    let email = document.getElementById('email')
    let menssageFault = document.getElementById('mensag-fault')

    menssageFault.style.display = 'none'

    // First Name init
    blockNameFirst.addEventListener('blur', function() {
        if(blockNameFirst.value.trim() === '') {
            blockNameFirst.style.border = '2px solid red' //DEIXA BORDA TOTALMENTE VERMELHA
            blockNameFirst.style.outline = '0px solid red' //0px pq no css já tinha 2 pix do width
            menssageFault.style.display = 'inline'
            email.style.marginTop = '48px'
        }
    
        else {
            blockNameFirst.style.border = ''
            menssageFault.style.display = 'none'
            email.style.marginTop = ''
        }
    })
    
    blockNameFirst.addEventListener('input', function() {
        if(blockNameFirst.value.trim() !== '') {
            blockNameFirst.style.border = ''
            menssageFault.style.display = 'none'
            email.style.marginTop = ''
        }
    })

    //Finald First Name

    //Init Last Name

    let blockNameLast = document.getElementById('name-last')
    let menssageFault2 = document.getElementById('mensag-fault2')

    menssageFault2.style.display = 'none'

    blockNameLast.addEventListener('blur', function() {
        if(blockNameLast.value.trim() === '') {
            blockNameLast.style.border = '2px solid red'
            blockNameLast.style.outline = '0px solid red'
            menssageFault2.style.display = 'inline'
            email.style.marginTop = '48px'
        }

        else{
            blockNameLast.style.border = ''
            menssageFault2.style.display = 'none'
            email.style.marginTop = ''
        }
    })

    blockNameLast.addEventListener('input', function() {
        if(blockNameLast !== '') {
            blockNameLast.style.border = ''
            menssageFault2.style.display = 'none'
            email.style.marginTop = ''
        }
    })

    //Finald Last Name

    //Init Message
    let blockMessage = document.getElementById('input-message')
    let menssageFault23 = document.getElementById('mensag-fault3')

    blockMessage.addEventListener('blur', function() {
        if(blockMessage.value.trim() === '') {
            blockMessage.style.border = '2px solid red'
            blockMessage.style.outline = '0px solid red'
            menssageFault23.style.display = 'inline'
        }

        else{
            blockMessage.style.border = ''
            menssageFault23.style.display = 'none'
        }
    })

    blockMessage.addEventListener('input', function() {
        if(blockMessage.value.trim() !== '') {
            blockMessage.style.border = ''
            menssageFault23.style.display = 'none'
        }
    })

    //Finald Message

    //Init Email
        
    let boxEmail = document.getElementById('address-email')
    let messageError = document.getElementById('mensag-faultEmail')

    document.getElementById('address-email').addEventListener('input', function() { //Responsável pela resposta 
        validateEmail()
    })

    document.getElementById('address-email').addEventListener('blur', function() { //Responsável pela interação
        if(this.value === '') {
            boxEmail.style.border = '2px solid red'
            boxEmail.style.outline = '0px solid red'
            messageError.style.display = 'inline'
        }

        else {
            validateEmail()
        }
    })
        //Validation Email Initial
    function validateEmail() {
        const ValueEmail = boxEmail.value

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(regex.test(ValueEmail)) {
            boxEmail.style.border = ''
            messageError.style.display = ''
        }

        else {
            boxEmail.style.border = '2px solid red'
            boxEmail.style.outline = '0px solid red'
            messageError.style.display = 'inline'
        }
    }
        //Validation Email Finold

    //Finald Email

    
})
//Init Submit

document.getElementById('button-submit').addEventListener('click', function(event) {
    event.preventDefault()
//Faults dos Nomes 
    const boxFirst = document.getElementById('name-first')
    const messageFirst = document.getElementById('mensag-fault')

    const boxLast = document.getElementById('name-last')
    const messageLast = document.getElementById('mensag-fault2')

    const divEmail = document.getElementById('email')

    const firstValue = boxFirst.value.trim()
    const lastValue = boxLast.value.trim()

    if(firstValue === '' && lastValue === '') {
        boxFirst.style.border = '2px solid red' //DEIXA BORDA TOTALMENTE VERMELHA
        boxFirst.style.outline = '0px solid red' //0px pq no css já tinha 2 pix do width
        messageFirst.style.display = 'inline'
        divEmail.style.marginTop = '48px'

        boxLast.style.border = '2px solid red'
        boxLast.style.outline = '0px solid red'
        messageLast.style.display = 'inline'
        divEmail.style.marginTop = '48px'

    }

    else if (firstValue === '' && lastValue !== '') {
        boxFirst.style.border = '2px solid red' //DEIXA BORDA TOTALMENTE VERMELHA
        boxFirst.style.outline = '0px solid red' //0px pq no css já tinha 2 pix do width
        messageFirst.style.display = 'inline'
        divEmail.style.marginTop = '48px'
    }

    else if (firstValue !== '' && lastValue === '') {
        boxLast.style.border = '2px solid red'
        boxLast.style.outline = '0px solid red'
        messageLast.style.display = 'inline'
        divEmail.style.marginTop = '48px'
    }

    
//Fim dos Faults Nomes

//Init Fault Email

    const boxEmailFaul = document.getElementById('address-email')
    const messageEmail = document.getElementById('mensag-faultEmail')

    if(boxEmailFaul.value.trim() === '') {
        boxEmailFaul.style.border = '2px solid red'
        messageEmail.style.display = 'inline'
    }
//Finald Fault Email

//Init BOX

    const messageFaultBox = document.getElementById('mensag-faultBox')
    const divMessage = document.getElementById('message')

    if(contestGeneral === false && contesteGeneral2 === false) {
        messageFaultBox.style.display = 'inline'
        divMessage.style.marginTop = '25px'
    }

    document.getElementById('box1').addEventListener('click', function() {
        messageFaultBox.style.display = 'none'
        divMessage.style.marginTop = ''
    })

    document.getElementById('box2').addEventListener('click', function() {
        messageFaultBox.style.display = 'none'
        divMessage.style.marginTop = ''
    })

//Finald BOX

//Init Message Fault

    const messageOutput = document.getElementById('input-message')
    const errorMessage = document.getElementById('mensag-fault3')

    if(messageOutput.value.trim() === '') {
        messageOutput.style.border = '2px solid red'
        errorMessage.style.display = 'inline'
    }

//Finald Message Fault

//Init Check Contacted
    const messageContacted = document.getElementById('message-faultContacted')
    const divButton = document.getElementById('button-submit')

    if(contactedOutput === false) {
        divButton.style.marginTop = '55px'
        messageContacted.style.display = 'inline'
    }

    document.getElementById('fa-square').addEventListener('click', function() {
        divButton.style.marginTop = ''
        messageContacted.style.display = 'none'
    })

    document.getElementById('consent-contacted').addEventListener('click', function() {
        divButton.style.marginTop = '55px'
        messageContacted.style.display = 'inline'
    })
//Finald Check Contacted

//Aumentar Form
    let allItemns = ['name-first', 'name-last', 'address-email', 'input-message'];
    const form = document.getElementById('form');

    allItemns.forEach(id => {
        const elements = document.getElementById(id);
    
        if (elements.value.trim() === '') {
            form.style.height = '832px';
        }
    });
// Fim Aument Form

// Verificação final para todos os campos preenchidos
    if (firstValue !== '' && lastValue !== '' && boxEmailFaul.value.trim() !== '' && messageOutput.value.trim() !== '' && (contestGeneral || contesteGeneral2) && contactedOutput === true) { // first e last já estavam declarados
        menssageSucessfull() // contactedOutPut sem nada, pois indica que é um true
    }

    function menssageSucessfull() {
        const messageSucessfull = document.getElementById('messageSucessfull')
        messageSucessfull.classList.add('show')
    }
})
//Finald Submit