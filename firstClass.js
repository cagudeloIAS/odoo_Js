

/* var vs let vs const */
// const es inmutable , = Operador de asignacion
// const name = "John";


// let vs var 
// let tiene un scope de bloque y var tiene un scope global 

 function viewName() {
    let name = "John";
    console.log(name);
}


 viewName();


 /* Tipos de datos */
// Number,String,Boolean,Null,Undefined, Symbol, Array, Object

let num = 1; // Number
let number = 1.4; // Number
const name = 'John'; // String
let text =  `Mi nombre es ${name}`; // String    "Mi nombre es" + name + "."
const bool = true; // Boolean (false)  // 0 = false, 1 = true
//const nulo = null; // Null
//const indefinido = undefined; // Undefined

//num = "Hola mundo";
console.log(typeof(num));
console.log(text);

const array = [1,2,3,4,5]; // Array
const object = { name: 'John', age: 30 }; // Object
let simbolo = Symbol();

let persona = {
    [simbolo]: "Valor oculto"
};
console.log(persona.name)

//null y undefined
const indefinido = undefined; // Undefined
const nulo = null; // Null

const name2 = nulo ?? "default";
console.log(name2)
let lastName;
console.log(indefinido == lastName); 
console.log(nulo == indefinido);


// Operadores de comparacion

// == igualdad
console.log("==" , "1" == 1);

// === estrictamente igual
console.log("===", "1" === 1);

// != diferente
console.log("!=", "1" != 1);

// !== estrictamente diferente
console.log("!==", "1" !== 1);


if( typeof(name2) == 'undefined' ) {
    console.log("Name no existe");
}else{
    console.log("Name2 existe");
}

// operador ternario
let nameTest = typeof(name2) == 'undefined' ? "Name no existe" : "Name existe";

// >, >=
if( "20" >= 10 ) {
    console.log("20 es mayor que 10");
}

// <, <=

if( 10 <= 20 ) {
    console.log("10 es menor que 20");
}