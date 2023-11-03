//1 - variáveis

// let nome = "Felipe"; //atribuir valor a variável e tipo de dado



// nome = "Felipe Souza" // podemos atribuir um novo valor sem usar o let.

// console.log(nome)

// const idade = 31 // const não podemos alterar o valor da variável.

// console.log(idade)

// console.log(typeof nome)
// console.log(typeof idade)

//2 - mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"
//variaveis fora da regra

// let a = 10,
// b = 20,
// c = 30;

// console.log(a, b, c);

// const nomecompleto = "Matheus Battisti";
// const nomeCompleto = "Felipe Souza";

// console.log(nomecompleto, nomeCompleto);

// simbolos permitidos para criação de variáveis

// let _teste = "ok";
// let $teste = "ok";

// console.log(_teste, $teste);


// nomes reservados

// let breakTeste = 123;

// ambiente javascript




//prompt

// const age =prompt("Digite a sua idade :");

// console.log("Você tem " + age + " anos");

//alert

// alert("Testando");

// const z = 10;

// alert(`O número é ${z}`);


//math

// console.log(Math.max(5, 2, 3, 1 , 10));

// console.log(Math.floor(5.5));

// console.log(Math.ceil(5.14));

// console.log(Math.abs(-6));

// console.log(Math.round(3.4));

//objeto console

// console.log("Teste!");

// console.error("erro!");

// console.warn("aviso!")

//if - estrutura condicional

// let Idade = prompt("Quantos anos você tem ?");
// if(Idade >=18){
//     console.log("Você pode tirar habilitação");
// }
// const user = "João"

// if (user === "João"){
//     console.log("Usuário cadastrado");
// }



//else

// const loggedIn= true

// if(loggedIn){
//     console.log("Está autenticado !")
// }   else{
//     console.log("Não está autenticado")
// }

// let you = prompt("Você é Homem ou Mulher ?")

// if(you === "Homem"){
//     console.log("Você deve se alistar aos 18 anos")
// } else{
//     console.log("Você não precisa se alistar.")
// }

// const q = 10
// const w = 15

// if(q > 5 && w < 20){
//     console.log("Números mais altos")
    
// } else{
//     console.log("Os números não são mais altos")
// }

//9 - else if

// if(1 > 2){
//     console.log("Teste")
// } else if(2 > 3){
//     console.log("Teste 2")
// } else if(5 > 1){
//     console.log("Condição verdadeira")
// }

// let userName = prompt("Você tem quantos anos ?")

// if (userName === 18){
//     console.log("Você tem que se alistar obrigatoriamente")
// } else if (userName > 18){
//     console.log("Você já se alistou anteriormente")
// } else {
//     console.log("Você deverá se alistar com 18 anos")
// }

// const UserName = "matheus" 
// const UserAge = 31

// if(UserName === "José"){
//     console.log("Bem vindo José")
// } else if( UserName === "Matheus"){
//     console.log("Bem vindo Matheus.")
// } else{
//     console.log("Nenhuma condição aceita")
// }

// estruturas de repetição - while

let p = 1;

while(p > 5){
    console.log(`Repetindo ${p}`)
    p = p + 1
}

// do while

let o = 10

do{
    console.log(`Valor de o : ${o}`)
    o--

} while(o > 1)

// for - o mais utilizado

for (let t = 0; t < 10;t++){
    console.log("Repetindo algo...");
}

let r = 6

for(r; r > 0; r = r - 1){
    console.log(`O R está diminuindo: ${r}`);
}


// identação

for (let u = 0; u < 10; u++){
    if(u* 2 > 10) {
        console.log(`Maior que 10! ${u}`);   
} else {
    if(u / 2 === 0){
        console.log("Deu 0");        
    }
 }    
}   

// saída de loop

for (let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`);

    if( g === 12){
        console.log("O g é 12");
        break;
    }
}

for (let men = 20; men > 12; men--){
    console.log(`O valor de H é ${men}`)

    if(men === 12){
        console.log("O valor de H é igual a 10");
        break
    }
}

// pulando a execução de um loop

for (let s = 0; s < 10; s = s + 1){
    //operador resto = %
    if(s % 2 === 0){
        console.log("Número par !")
        continue;
    }
    console.log(s)
}

for (let s = 0; s < 10; s = s + 1){
    //operador resto = %
    if(s % 2 === 0){
        console.log("Número par !")
        continue;
    }
    console.log(s)
}

// 16 - switch

const job = "asd"

switch(job) {
    case "Programador":
        console.log("Você é um Programador!");
        break;
    case "Advogado":
        console.log("Você é um Advogado!");
        break;    
    case "Engenheiro":
        console.log("Você é um Engenheiro!");
        break;
        default:
            console.log("Profissão não encontrada");    
}

//switch "errado" - sem utilizar o break, apartir da condição verdadeira todas serão verdadeiras

const l = 100

switch(l){
    case 200:
        console.log("L é 200!")
    case 100:
        console.log("L é 100!")    
    case 10:
        console.log("L é 10!")    
    default:
        console.log("L não foi encontrado")    
}

// Convenção de nomes

let programadorcadastrado // ruim
let programador_cadastrado // snake case
let ProgramadorCadastrado // não utilizar
let programadorCadastrado // mais utilizado