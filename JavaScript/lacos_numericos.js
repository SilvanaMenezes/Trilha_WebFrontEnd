// Laço Numérico: For

const input = require('readline-sync')

// contador (acumulador)
let cont = 0
cont = cont + 1
cont += 10
cont++
console.log(cont)
console.clear()

// Estrutura for
for(let i = 0; i <= 10; i++) {
    console.log('contando', i)
}

for(let i = 12; i > 8; i--) {
    console.log('descrescendo', i)
}
console.clear()

// Exercício
// Calcular a média de 03 notas através do input do usuário
let nota;
let soma = 0

for(let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))
    soma = soma + nota
}
console.log(`A média do aluno é: ${soma / 3}`)

