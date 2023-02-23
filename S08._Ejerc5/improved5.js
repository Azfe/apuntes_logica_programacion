/*
    Dada una cadena de textos, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje, solo estructuras de control.
*/

function invertir(texto){

    let invertido = "";

    for(let letra of texto){ // extrae cada letra del texto

        invertido = letra + invertido;        
    }

    console.log(invertido);
}

invertir("choza");