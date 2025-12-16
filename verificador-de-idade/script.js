function verificar () {
     const data = new Date()
     const ano = data.getFullYear()
     const fano = document.querySelector('#txtano')
     const res = document.querySelector('div#res')
     if (fano.value.length == 0 || fano.value > ano) {
    window.alert('Verifique os dados e tente novamente')
  } else {
    const fsex = document.getElementsByName('radsex')
    const idade = ano - Number(fano.value)
    let gênero = ''
    const img = document.createElement ('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
      gênero = 'Masculino'
      if(idade >=0 && idade <10){
        img.setAttribute('src', 'foto-bebe-m.jpg')
      } else if (idade <30){
        img.setAttribute('src', 'foto-jovem-m.jpg')
      } else if (idade<50){
         img.setAttribute('src', 'foto-adulto-m.jpg')

      } else {
        img.setAttribute('src', 'foto-idoso-m.jpg')
      } 
    } else if (fsex[1].checked) {
      gênero = 'Feminino'
      if(idade >=0 && idade <10){
        img.setAttribute('src', 'foto-crianca-f.jpg') // ok
      } else if (idade <30){
        img.setAttribute('src', 'foto-jovem-f.jpg') //eok
      } else if (idade<50){
        img.setAttribute('src', 'foto-adulto-f.jpg')// erro
      } else {
        img.setAttribute('src', 'foto-idoso-f.jpg')
      } 
       
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos o gênero ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
  
