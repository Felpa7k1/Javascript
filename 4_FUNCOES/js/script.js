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