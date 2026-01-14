function descubra() {
    let produto = prompt('Qual produto está comprando?')
    let v1 = Number(prompt('Digite o valor do produto'))
    let v2= Number(prompt(`Digite o valor pago pelo ${produto}`))
    let res = v2 - v1

    if (res > 0){
         alert (`Considerando o valor do produto e o valor recebido, seu troco será de R$ ${res}`)
        
    } else {
        alert ('Você não tem troco :(')
    }
}