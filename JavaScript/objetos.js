// Objetos

// Como criar um objeto?
let pessoa = {
    nome: 'Sil',
    idade: 38,
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['idade'])
console.clear()

// Como adicionar um par chave-valor?
pessoa.altura = 1.66
console.log(pessoa)

// Como remover um par chave-valor?
delete pessoa.altura
console.log(pessoa)

// Como percorrer?
for ( let chave in pessoa) {
    console.log(chave)
}

