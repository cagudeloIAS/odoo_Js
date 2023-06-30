// [1,2,3,4, undefined , ,,,, 19]  = index empieza desde 0, se puede declarar con let o const

// const arrar1 = [1,2,3,4, "Hola", false, [{name: "Cristian"}, 30, 40]];

const numbers = [1,2,3,4,5]
const array = [5,6,7,8];


array[9] = '10';

console.log(array[8]);
console.log(array.length);

// spred [[], []]  o [ 1,2,3,4]
let spreed =   [...numbers, ...array] //  numbers.concat(array)

console.log(spreed);

// length -> tamaño del array, Push para inserta, Pop para eliminar, shift -> elimina el primer elemento
let newLength = spreed.push(11);

console.log(newLength);

spreed.pop();

console.log(spreed)

let value = spreed.shift();
console.log(value);
console.log(spreed);

spreed.unshift(11);
console.log(spreed);

//spreed.splice(spreed.indexOf(5),1);
//spreed.borrar(value => value === undefined)

/*while (spreed.indexOf() != -1) {
    spreed.splice(spreed.indexOf(undefined),1);   
}*/

spreed = spreed.filter(value => value != 5 && value != undefined );

console.log(spreed)
