// Estruturas Condicionais

const idade = 20

if(idade >= 18) {
    console.log('Você é maior de idade!')
} else {
    console.log('Você é menor de idade!')
}
console.clear()

// Exercício
/* Se media >= 7, aprovado
   Se media < 7 e media >= 5, recuperação
   Se media < 5, reprovado */

let media = 7

if(media >= 7) {
    console.log("aprovado(a)")
} else if(media >= 5) {
    console.log('recuperação')
}else {
    console.log('reprovado(a)')
}

// questão do exercício

if (50 > 100) {
    console.log("Falta um tanto");
  } else {
    if ("1" == "-1") {
      console.log("Quase lá");    
    }
  
    if (!null) {
      console.log("Sucesso");
    }
  }