//1 - variáveis

let nome = "Felipe"; //atribuir valor a variável e tipo de dado

console.log(nome);

nome = "Felipe Souza" // podemos atribuir um novo valor sem usar o let.

console.log(nome) 

const idade = 31 // const não podemos alterar o valor da variável.

console.log(idade)

console.log(typeof nome)
console.log(typeof idade)

//2 - mais sobre variáveis

// let 2teste = "inválido" 
// let @teste = "inválido"
//variaveis fora da regra

let a = 10, 
b = 20, 
c = 30;

console.log(a, b, c);

const nomecompleto = "Matheus Battisti"
const nomeCompleto = "Felipe Souza"

console.log(nomecompleto, nomeCompleto);

// simbolos permitidos para criação de variáveis

let _teste = "ok"
let $teste = "ok"

console.log(_teste, $teste)


// nomes reservados

let breakTeste = 123

// ambiente javascript

alert("teste")


//prompt

const age = prompt("Digite a sua idade :")

console.log("Você tem " + age + " anos")

//alert

alert("Testando")

const z = 10

alert(`O número é ${z}`)

//math