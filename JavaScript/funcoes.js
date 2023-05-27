// Funções

// definido a função
function saudacao() {
    console.log('Olá, seja bem-vinda(o) ao nosso curso de JavaScript.')
}
saudacao()                                                                      //chamando a função
console.clear()

// Como enviar parâmentros para as funções
function saudacao(nome, curso ='HTML') {                                       //parâmetro default
    console.log(`Olá ${nome}! Seja bem-vinda(o) ao nosso curso de ${curso}.`)
}
saudacao('Silvana')                              //quando não passamos o nosso parâmetro, a função assume o default
console.clear()

// Retorno da função
function soma(n1, n2) {
    return n1 + n2
}
let resultado = soma(10, 20)
console.log(resultado)
console.clear()

function maior50(numero) {
    if(numero > 50) {
        return true
    }

    return false
}
let teste = maior50(45)
console.log(teste)
