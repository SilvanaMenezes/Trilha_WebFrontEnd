// Laços Condicionais: While

const input = require('readline-sync')

const numero_sorteado = 5

let numero = Number(input.question('Qual numero voce vai digitar? '))

while(numero !== numero_sorteado) {
    console.log('Você errou, tente novamente...')

    numero = Number(input.question('Qual numero voce vai digitar? '))
} 
console.log('você acertou, Parabéns!')

