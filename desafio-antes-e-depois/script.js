function verificar (){
    const valor = Number(prompt('Digite um número:'))
    const ant = valor - 1
    const suc = valor + 1
    alert(` Número digitado : ${valor}
            Antecessor: ${ant}
            Sucessor: ${suc}`)

}