//1 -strict

"use strict";

//opa = "teste";

const opa = "Teste"

//const undefined = 19;

//delete[].length;

let ob = {
    Nome: "Felipe",
    Profissao :"Programador"
}

console.log(ob);

console.log(ob.Profissao);

console.log(typeof ob)

let lista = [
    "Felipe",
    "Souza",
    3,
    4
]


console.log(lista.indexOf("Souza"));


// metodo log para debug

let a = 1;
let b = 2;

if(a == 1){
    a = b + 2
}

console.log(a);

for (let i = 0; i < b; i++){
    a = a + 2;
    console.log(a)
}

if(a > 5){
    a = 25;
}

console.log(a);

//debugger

let c = 1 ;
let d = 2;

if(c == 1){
    c = d + 2; 
}

//debugger;

for (let i = 0; i < d; i++){
    c = c + 2;
}

console.log("executou o loop");

//debugger;

if(c > 5){
    c = 25;
}

// tratamento de dado por função

function checkNumber(n){
    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Valor incorreto!");
        return;
    }

    console.log("Valor correto !");
    return result
}

checkNumber(10);
checkNumber("5");
checkNumber({});
checkNumber("Teste");
