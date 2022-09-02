function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = '#F2BF5E'
    } else if (hora >= 12 && hora < 18) {
        // TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#F25C05'
    } else {
        // NOITE 
        img.src = 'imagens/noite.png'
        document.body.style.background = '#022340'
    }
}