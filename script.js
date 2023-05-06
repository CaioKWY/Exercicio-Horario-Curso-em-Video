function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    //var hora = 10 
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 5 && hora < 12) {
        //manha
        img.src = "./imagens/manha.png"
        document.body.style.background = "#cca189"
    }
    else if (hora >= 12 && hora < 18) {
        //dia
        img.src = "./imagens/dia.png"
        document.body.style.background = "#5696e0"

    }
    else { 
        img.src = "./imagens/noite.png"
        document.body.style.background = "#2b3162"
        //noite
    
    }

}
