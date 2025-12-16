
function carregar(){
    let msg = document.getElementById ('msg')
    let img = document.getElementById ('imagem')
    let data = new Date ()
    let hora = data.getHours()
   
    msg.innerHTML=  `Agora são ${hora} horas` 
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = "#eeca7bff"

    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = "#f9a046ff"


    } else {
        img.src = 'noite.png'
        document.body.style.background = "#461e91ff"
    }

}
