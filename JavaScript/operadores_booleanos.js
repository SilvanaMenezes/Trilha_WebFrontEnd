// Operadores Booleanos

const numero = 10

// Igualdade:      == (ou ===)
console.log(numero == 10)                //comparação de conteúdo

// Desigualdade:   != (ou !==)
console.log(numero != 10)               //comparação de conteúdo             

// Maior que:      >
console.log(numero > 05)

// Maior ou Igual: >=
console.log(numero >= 15)

// Menor que:      <
console.log(numero < 20)

// Menor ou igual: <=
console.log(numero <= 8)

console.log('Comparação de tipo: ', numero === '10')               
console.log('Comparação de tipo: ', numero !== '10')              

// Conjunções Lógicas

// AND => &&
let idade = 26
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true
console.log('Posso dirigir?', possoDirigir)

// OR => ||
idade = 40

const votoFacultativo = idade < 18 || idade >= 70
console.log('Precisa votar?', votoFacultativo)

// NOT => !
const bomCurso = false;
console.log('O curso é bom?', !bomCurso)