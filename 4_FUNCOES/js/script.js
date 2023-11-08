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


// mais sobre arrow function

const raizQuadrada = (x) =>{
    return x * x
}

console.log(raizQuadrada(4))


const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5));
console.log(raizQuadrada2(12));

const helloWorld = () => console.log("Hello World")

helloWorld();


// 7 - parametro opcional 


const multiplication = function (m ,n){
    if (n === undefined){
        return m * 2
    } else{
        return m * n
    }
}

console.log(multiplication(5));

console.log(multiplication(6,3));

const greeting = (name) =>{
    if(!name){
        console.log("Olá")
        return
    } 

    console.log(`Olá ${name}!`)
}

greeting();
greeting("Felipe");

// valor default

const customGreeting = (name,greet = " Olá ") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Matheus"));
console.log(customGreeting("João", "Bom dia"));


const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++){
        console.log(text);
    }
};

repeatText("Testando");
repeatText("Agora repete 5 vezes", 5);

const repeatText2 = (text,repeat = 2) => {
    for(let i = 0; i < repeat; i++){
        console.log(text);
    }
}

const repeatText3 = (text, repeat = 3) =>{
    for(i = 0; i < repeat; i++){
        console.log(text)
    }
}

repeatText3("Texto");


//closure

function someFunction(){
    let txt = "Alguma coisa"

    function display(){
        console.log(txt)
    }

    display();
}

someFunction();

// mais sobre closure

const multiplicationClosure = (n) => {
    return (m) =>{
        return n * m
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1(5));
console.log(c2(10));