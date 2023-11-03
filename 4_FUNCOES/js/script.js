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