// arrays

const lista = [1 ,2 ,3 ,4 ,5]
console.log(lista)

console.log(typeof lista)

const itens = ["Matheus", true, 2, 4.5, []]

console.log(itens);

//mais sobre arrays

const arr = ["a", "b", "c", "d", "e"]

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[83]);


// propriedades

const numbers = [5, 3, 4]

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Matheus";
console.log(myName.length);

// metódos

const otherNumbers =[1, 2, 3]

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Algum texto"

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));


// objetos
const person = {
    name : "Matheus",
    age : 31,
    job: "Programador"
}

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// remover ou criar novas propriedades

const car  = {
    engine : 2.0,
    brand: "VW",
    model : "Tiguan",
    km : 20000
}

console.log(car);
car.doors = 4;
console.log(car)
delete car.km

console.log(car)


//diferença entre arrays e objetos

// 7- mais sobre objetos - método assing


const obj ={
    a: "teste",
    b:true

}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj);

console.log(obj2);
console.log(obj);

// conhecendo melhor o objeto

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// mutability

const a = {
    name :"Matheus"
}

const b = a 

console.log(a);
console.log(b);

console.log(a === b)

a.age = 31
console.log(a)
console.log(b)

delete b.age
console.log(a);
console.log(b);

//loop em arrays

const users = ["Matheus", "João", "Pedro", "Miguel"]

for (let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`)
}

//push e pop
const array = ["a", "b", "c"]

array.push("d")

console.log(array)

console.log(array.length)

array.pop()


console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push("z", "x", "y");

console.log(array);

//shift e unshifit 

array.unshift("9");
console.log(array);
array.shift();
console.log(array);

const letters = ["a", "b", "c"]

letters.unshift("0");
console.log(letters);
const letter = letters.shift();
console.log(letters);
console.log(letter)

//indexof lastIndexOf

const myElements = ["Morango", "Abacaxi", "Tomate", "Pera", "Morango"]

console.log(myElements.indexOf("Morango"))
console.log(myElements.indexOf("Tomate"))
console.log(myElements.lastIndexOf("Morango"))

console.log(myElements[2])
console.log(myElements[4])


// slice

const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2,4 + 1)

console.log(testeSlice)
console.log(subArray)

const subArray2 = testeSlice.slice(10,20)

console.log(subArray2)

const subArray3 = testeSlice.slice(2);

console.log(subArray3)


// forEach

const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) =>{
    console.log(`O número é ${numero}`)
})

const posts = [
    {title:"Primeiro post", category:"PHP"},
    {title:"Segundo post", category:"JavaScript"},
    {title:"Terceiro post", category:"Python"}
]

posts.forEach((post)=>{
    console.log(`Exibindo post ${post.title}, da categoria ${post.category}`)
})


const models = [
    {title:"HB20", color:"Azul"},
    {title:"Nivus", color:"Preto"},
    {title:"Bmw", color:"Cinza"},
]

models.forEach((model)=>{
    console.log(`Exibindo o modelo ${model.title}, cor ${model.color}`)
})


// includes

const brands =["BMW", "VW", "Fiat"]

console.log(brands.includes("BMW"));

console.log(brands.includes("KIA"));

if(brands.includes("BMW")){
    console.log("Há carros da marca BMW!")
}

//reverse

const rever = [1, 2, 3, 4, 5]
rever.reverse();
console.log(rever)

//metodos de string

//trim - remove tudo que não é texto de uma string

const trimTest = "  trim\n  "
console.log(trimTest);
console.log(trimTest.trim());
console.log(trimTest.length);
console.log(trimTest.trim().length)

//padStart

const testePad = "1"
const newNumber = testePad.padStart(4,"0");
console.log(newNumber);
const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd)


//split

const frase = "O rato roeu a roupa do rei de Roma."

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

//join

const fraseDenovo = arrayDaFrase.join(" ")

console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar : ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)

// repeat

const palavra = "Testando "

console.log(palavra.repeat(5));

// rest operator

const somaInfinita = (...args) =>{
    let total = 0
    for ( let i = 0; i < args.length; i++){
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 35, 50, 3424, 127712, 12887, 23));


// estrutura for of 

const somaInfinita2 = (...args) =>{
    let total = 0 

    for(num of args){
        total += num;
    }
    return total;
}

console.log(somaInfinita2(1, 2, 4));

console.log(somaInfinita2(5, 6, 1, 23, 5, 6, 3, 5));

//Destructuring em objetos

const userDetails = {
    firtsName: "Matheus",
    lastName : "Batisti",
    job : "Programador"
}

const {firtsName,lastName, job} = userDetails

console.log(firtsName, lastName, job);


// renomear as variaveis 

const {firtsName: primeiroNome}= userDetails;

console.log(primeiroNome);


//destructuring com arrays

const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// json

const myJSon = '{"name":"Matheus", "age":31, "skills":["PHP", "JavaSrcript", "Python"]}'

console.log(myJSon)
console.log(typeof(myJSon))

// metodos de conversão JSon para objeto e objeto para JSon

const myObject = JSON.parse(myJSon)

console.log(typeof(myObject));
console.log(myObject.skills);

//json invalido

const badJson = '{"name":"Matheus","age":31}'

const myObject2 = JSON.parse(badJson);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson)