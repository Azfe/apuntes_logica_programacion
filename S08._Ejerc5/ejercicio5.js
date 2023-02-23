/*
    ¿Cuánto es el X por ciento de X número?
*/

let porCiento = 43;
let num = 897;
let resul;

function tantoPorCiento(porCiento, num){
    
    resul = num * (porCiento / 100);

    return resul;
}

resul = tantoPorCiento(porCiento, num);
console.log("El " + porCiento + " por ciento de " + num + " es " + resul);
