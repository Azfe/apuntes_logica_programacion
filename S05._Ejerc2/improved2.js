/*
    Dada una cadena de texto, comprobar si es un palíndromo o no. 
    Los palíndromos son palabras que se leen igual aún estando invertido.
*/

function palindromo(texto){
    let invertido = texto
                    .split('')
                    .reverse()
                    .join('');

    /*if(invertido === texto){
        return true;
    }else{
        return false;
    }*/

    return invertido === texto;
}

console.log("¿Es un palíndromo? " + palindromo("otto"));