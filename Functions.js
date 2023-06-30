// Funciones  y funciones con parametros

function view() {
    //codigo
    console.log("función ")
}


view();

function viewParams(msg) {
    console.log(msg);
}

viewParams("funcion 2");


// funcion con return
// lo que recibe la función se llama Parametros
function sum(a,b) {
    return a +b;
}

console.log(sum(2,3));

// cuando invoco la función y paso inormación, se llaman argumentos
const result = sum(3,4);

console.log(result);

const result2 = viewParams();

console.log("sin retorno", result2);

function name(params) {
    if( typeof params == undefined){
        return;
    }
    console.log(params);
}

// El orden en que paso los argumentos es importante

function res(a, b) {
    return b-a;
}

res(3, 7);

// Funciones de expresion, y son funciones anonimas
const expression = function () {
    console.log("función expresion");
}

expression();

// Hosting 
res2(); // ya la conoce
//expression2(); // No lo conoce todavia

function res2(a, b) {
    return b-a;
}

const expression2 = function () {
    console.log("función expresion");
}


console.log(mult(2,3));

// arrow function
const arrow = (a, b) => {
    console.log("arrow function");
}  

const arrow2 = a => {
    console.log("arrow function");
}  

const div = (a,b) => {
    return a/b;
}  

console.log("división", div(12,2));

const div2 = (a,b) =>{a/b}


console.log("división 2", div2(12,2));


// Valores defecto en las funciones

function mult(a, b, c = 1) {
    return a * b*c;
}

// a = 2 ; [1,3,4,5,6,7,8,9,10]
function mul(a, ...array){
    return array.map( value => value * a);
}

console.log(mul(2,1,3,4,5,6,7,8,9,10));

const person = {
    name : "Crisitan"
}


console.log("antes ", person);
function changeObjeto(params) {
    params.name = "Cambio"
}

changeObjeto(person);

console.log("despues", person)

let numer1 = 20
let numer2 = 10;

const scope = () => {
    let numer1 = 2;
    let numer2 = 3
    return numer1 * numer2;
}

 function scope2  () {
    return numer1 * numer2;
}

console.log(scope2());


// recursividad 5! = 1*2*3*4*5

function factorial(num) {
    if(num == 1){
        return 1;
    }
    let result = num * factorial(num-1);
    console.log("dentro de factorial", num);
    return result;
}

console.log("factorial", factorial(5));

console.log(typeof factorial);

function test(f, ...array) {
    console.log("Desde el test")
    array.forEach(value => f(value))
}


test(viewParams, 1,2,3,4,5);
