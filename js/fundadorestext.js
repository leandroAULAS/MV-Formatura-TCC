function text(){
    const time = new Date()
    const hour = time.getHours()
    let text = document.getElementById('textback')

    if(hour >= 6 && hour <= 12){
        text.innerHTML = 'Bom dia, me chamo Márcio Prado e sou um dos fundadores da empresa MV Formatura!'
    }

    else if(hour > 12 && hour < 18){
        text.innerHTML = 'Boa tarde, me chamo Márcio Prado e sou um dos fundadores da empresa MV Formatura!'
    }

    else{
        text.innerHTML = 'Boa noite, me chamo Márcio Prado e sou um dos fundadores da empresa MV Formatura!'
    }
}


function text2(){
    const time = new Date()
    const hour = time.getHours()
    let text = document.getElementById('textback2')

    if(hour >= 6 && hour <= 12){
        text.innerHTML = 'Bom dia, me chamo Vânia Martins e sou uma das fundadoras da empresa MV Formatura!'
    }

    else if(hour > 12 && hour < 18){
        text.innerHTML = 'Boa tarde, me chamo Vânia Martins e sou uma das fundadoras da empresa MV Formatura!'
    }

    else{
        text.innerHTML = 'Boa noite, me chamo Vânia Martins e sou uma das fundadoras da empresa MV Formatura!'
    }
}



