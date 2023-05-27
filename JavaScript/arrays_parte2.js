// Arrays - Parte II - Métodos de Arrays

let arr1 = [30,12,45,34,29]
let arr2 = []

// Fatiamento: slice
console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))
console.clear()

// Adicionando elementos: push e unshift
console.log('Antes de adicionar elementos: ', arr2)
arr2.push('cachorro', 10, false)                            // final do array
console.log('Depois de adicionar elementos: ', arr2)

console.log('Antes de adicionar com unshift: ', arr2)
arr2.unshift('Gapar', 85, true)                            // começo do array
console.log('Depois de adicionar com unshift: ', arr2)
console.clear()

// Removendo elementos: pop e shift
console.log('Antes de remover com o pop: ', arr2)
let elementoRemovido = arr2.pop()                         // remove o último elemento e guarda em uma variável
console.log('Depois de remover com o pop: ', arr2)
console.log(elementoRemovido)

console.log('Antes de remover com o shift: ', arr2)
elementoRemovido = arr2.shift()                          // remove o primeiro elemento e guarda em uma variável
console.log('Depois de remover com o shift: ', arr2)
console.log(elementoRemovido)
console.clear()

// Concatenando arrays: concat
console.log('arr1', arr1)
console.log('arr2', arr2)

let arr3 = arr1.concat(arr2)                          // criando nova array com a junção das outras
console.log('arr3', arr3)
console.clear()

// Buscando elementos: indexOf e lastIndexOf
console.log(arr3)
let indiceElemento = arr3.indexOf('cachorro')       // quando retorno -1, o elemento não existe no array
console.log('O indice do elemento cachorro é: ', indiceElemento)

let arr4 = [97, 64, 38, 38, 39, 41]
console.log(arr4)
indiceElemento = arr4.lastIndexOf(38)               
console.log('O último indice do elemento 38 é: ', indiceElemento)
console.clear()

// Descobrindo a existência de um elemento: includes
console.log(arr4)
console.log(arr4.includes(10))
console.log(arr4.includes(64))
console.clear()

// Invertendo arrays: reverse
console.log('arr2 normal: ', arr2)
let arrInvertido = arr2.reverse()
console.log('arr2 invertido: ', arrInvertido)