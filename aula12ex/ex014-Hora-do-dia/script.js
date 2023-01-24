function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 6 && hora <= 12){
        img.src = 'fotomanha.png'
        document.body.style.background = "#e8d2a8"
        msg.innerHTML += "<p>Bom Dia!</p>"
    }
    else if(hora > 12 && hora <= 18){
        img.src = 'fototarde.png'
        document.body.style.background = "#fd7600"
        msg.innerHTML += "<p>Boa Tarde!</p>"
    }
    else if(hora > 18 || hora < 6 ){
        img.src = 'fotonoite.png'
        document.body.style.background = "#282e46"
        msg.innerHTML += "<p>Boa Noite!</p>"
    }

}

