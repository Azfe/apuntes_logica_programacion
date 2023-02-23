/*
    Dada una cadena de textos, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje, solo estructuras de control.
*/

let texto;

function invertirString(texto){

    let array = new Array(texto.length);
    let j = 0;

    texto = texto
            .replace(/[¡!.,-]/gi, '')
            .split('');
            
    console.log(texto);

    for(let i = texto.length-1; i >= 0; i--){        
        
        array[j] = texto[i];
        j++;    
    }

    let cadena = array.join('');

    return cadena;
}

let resul = invertirString("choza");
console.log(resul);
