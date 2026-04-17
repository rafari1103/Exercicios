//Escreva uma função que retorne a média de todos os números de um array
// Se o array estiver vazio, retorne 0

function mediaArray(numeros) {

    if (numeros.length === 0 ) {
        return 0
    }
    let soma = 0 // encontrar o valor do somatório para conseguir tirar a média

    for (let i = 0 ; i < numeros.length ; i++) {// variável de controle, condição, incremento 
        soma += numeros[i] // somar o valor 
    }
    let media = soma / numeros.length // soma do valor com a quantidade de elementos

    return media
}

console.log(mediaArray([2, 4, 6])) // 4
console.log(mediaArray([10, 20])) // 15
console.log(mediaArray([])) // 0