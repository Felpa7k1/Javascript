// 1 - criando uma função
function minhaFuncao(){
    console.log("Testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmvariavel = function (){
    console.log("Função em variável")
};

minhaFuncaoEmvariavel();

function funcaoComParametro(txt){
    console.log(`Imprimindo : ${txt}`)   

}

funcaoComParametro("Imprimindo alguma coisa");

funcaoComParametro("Outra função");

function idade(txt){
    console.log(`Esta é a minha idade ${txt}`)
}

idade("12");


// 2 - Retornando valores

const a = 10
const b = 20
const c = 30
const d = 40

function soma (n1,n2){
    return n1 + n2;
}

const resultado = soma(a,b);

console.log(resultado);

console.log(soma(a , d));

function sub(n1,n2){
    return n1 - n2;
}

console.log(sub(a,d));

// 3- escopo da função

let y = 15

function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da função é : ${y}`)
}


testandoEscopo();


y = 5;

console.log(`Y fora da função é : ${y}`);


testandoEscopo();


// nested scopes

let m = 10;

function escopoAninhado(){
    let m = 20;

    if(true){
        let m = 30;
    
    
    if(true){
        let m = 40;
        console.log(m);
    }
        console.log(m);

    }

    console.log(m);

}

escopoAninhado();

console.log(m);

// teste

let s = 10;

function escopo(){
    let s = 20

    if(true){
        let s = 30
    

    if(true){
        let s = 40;
        console.log(s)
    }


    console.log(s)
}    
    console.log(s)
}
escopo();

console.log(s)

// 5- ArrowFunction

const testeArrow = () => {
    console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar= (n) => {
    if(n % 2 === 0 ){
        console.log("Par")
        return
    }
    console.log("Impar")
};

parOuImpar(5);

parOuImpar(4);

