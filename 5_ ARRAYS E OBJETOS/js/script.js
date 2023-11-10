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