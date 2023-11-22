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