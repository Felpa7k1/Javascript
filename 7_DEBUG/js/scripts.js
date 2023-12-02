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