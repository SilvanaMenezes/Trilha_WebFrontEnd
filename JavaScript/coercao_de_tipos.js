// Coerção (Conversão) de Tipos

// 1. Coerção Explícita (Manual)
const numero = 10
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('1234'))          // string em número
console.log(parseInt(25.63))         // float em inteiro
console.log(parseFloat('356.41'))    // string em float
console.log(Boolean(0))              // número em booleano 1(ou qualquer número) = true 0 = false


// 2. Coerção Implicita (Automática)
console.log('10' + 1)              // junta os elementos
console.log(1 - '10')              // converte em numero e faz a operação
console.log(10 * 'asasa')          // NaN - não é um número, indica fala na operação

// Qual será a saída desse código?
let n = 1 + '1';
n = n - 1
console.log(n) 

// Qual será a saída desse código?
console.log(2 + 3 + 4 + '5') 

// Qual será a saída desse código?
console.log('5' + 2 + 3 + 4) 

// Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5') 