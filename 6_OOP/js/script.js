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