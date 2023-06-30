// if,  && Si, || OR


/*if( 10 > 20 ){
    // códgio a ejecutar
} else  {
    //codigo 
}

if( 10 > 20 ){
    // códgio a ejecutar
} else if(30>20) {
    //codigo 
}*/

// Do while - while

let contador = 0;

do { 
    // Codigo a ejecutar
    console.log( `Do while Contador es ${contador}`);
    contador ++;
} while (contador <= 0)


while (contador <= 10) {
    console.log( ` While Contador es ${contador}`);
    contador ++;
}

// switch
let dia = 3;
let diaSemana;

switch (dia) {
    case 1:
        //codigo en caso de 1
        diaSemana = "lunes";
        break;
    case 2:
        diaSemana = "martes";
        break;
    case  3: 
        diaSemana = "miercoles";
        break;
    default:
        diaSemana = "Fin de semana";
        break;
}

console.log(diaSemana);

// for

const array = [1,2,3,4,5,6,7,8,9];
for (let index = 10; index > 5; index--) {
    console.log( "fuera del if ", index)
    if(index == 8){
        console.log("dentro del if ", index);
        break;
    }   
}

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

array.forEach(value => {
    console.log("forech",value);
    value = 2;
});

array.forEach(value => {
    console.log("forech",value);
});


// continue 
for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
}
  