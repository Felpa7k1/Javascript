// 1 - metódos 

const animal = {
    nome :"Bob",
    latir: function() {
        console.log("Au Au")
    },
};

console.log(animal.nome)

animal.latir();

//2 - avançando em metódos

const pessoa = {
    nome : "Matheus",

    getNome : function() {
        return this.nome;
    },

    setNome : function (novoNome){
        this.nome = novoNome;
    }
}

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Joaquim");

console.log(pessoa.getNome());

// 3 - sobre o prototype

const text ="asdss"

console.log(Object.getPrototypeOf(text));

const bool = true

console.log(Object.getPrototypeOf(bool));

const arr = []

console.log(Object.getPrototypeOf(arr));

console.log(arr.length)


// mais sobre prototype

const myObject = {
    a : "b"
}

console.log(Object.getPrototypeOf(myObject))

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);


console.log(mySecondObject);

console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// classes básicas

const cachorro ={
    raca : null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão"

const shihtzu = Object.create(cachorro);

shihtzu.raca = "shih tzu";

console.log(shihtzu);

console.log(shihtzu.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog"

console.log(bulldog);


// classes baseadas em funcoes construtoras

function criarCachorro(nome, raca){

    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Vira Lata");

console.log(bob)

const jack = criarCachorro("Jack", "Poodle");

console.log(Object.getPrototypeOf(jack));

// funcoes como classe

function Cachorro(nome,raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Toby", "Husky");

console.log(husky);



