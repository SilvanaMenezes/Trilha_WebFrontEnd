// Arrays - Parte I

// Como criar um array?
let arr = ['Silvana', 38, 1.66, true]
console.log(arr)

// Como acessar os elementos do array?
console.log('primeiro elemento: ', arr[0])
console.log('terceiro elemento: ', arr[2])

// Como obter o tamanho do array?
console.log(`O array tem ${arr.length} posições.`)  // dessa forma a variável é impressa no formato string.

// Percorrendo arrays
console.clear()

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.clear()

for(let elemento of arr) {
    console.log(elemento)       // aqui estamos percorrendo os elementos (a variável pode ter outro nome)
}

console.clear()

for(let i in arr) {
    console.log(i, arr[i])       // aqui estamos percorrendo os indices (a variável pode ter outro nome) 
}                                // e os elementos

