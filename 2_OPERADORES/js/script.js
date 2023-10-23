// 1 - Number

console.log(2);
console.log(typeof 5.14);
console.log(typeof -128);

//2- Aritmética com Number

console.log(2 + 5);
// adição
console.log(2 - 5);
// subtração
console.log(2 * 5);
// multiplicação
console.log(2 / 5);
// divisão
console.log((2 + 2 + 3)/3);
// media

// 3 -Special Numbers

console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Strings

console.log(typeof"Um texto");
console.log(typeof'Mais um texto');
console.log('13');

// 5 - Símbolos especiais em string
//quebra de linha

console.log("Texto em \nduas linhas");
console.log("Espaçamento de \t de tab");

//6 - Concatenação

console.log("Meu" + "Texto" + "Concatenado");
console.log("Oi," + " tudo" + " bem?");

// 7 - Interpolação - Template Strings

console.log(`A soma de 2 + 2 é: ${ 2 + 2} `);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Booleans

console.log(typeof true);
console.log(5 > 20);
console.log(30 > 10);

// 9 - Comparações

console.log(5 <= 5);//menor ou igual

console.log( 2 == 1); //igual

console.log(2 >= 1); // maior ou igual

console.log(1 > 2 ); // maior que

console.log(1 < 2); // menor que 

console.log(1 === 1); // identico

console.log(1 != 1);// diferente de


//10 - Comparação do Idêntico

console.log(9 == "9");
console.log(9 + "9")
console.log(9 === "9")
console.log(9 !== "9")

//11 Operadores lógicos

console.log(true && true)// and
console.log(false || false)// or
console.log()// not