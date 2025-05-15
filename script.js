function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var comprimentando = window.document.getElementById('comprimentando')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'images/manha.jpg'
        document.body.style.background = '#e2cd9f'
        comprimentando.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#b9846f'
        comprimentando.innerHTML = 'Boa tarde!'
    } else {
        //Boa noite!
        img.src = 'images/noite.jpg'
        document.body.style.background = '#515154'
        comprimentando.innerHTML = 'Boa noite!'
    }
}
    
