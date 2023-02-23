/*
    Dada una cadena de texto, comprobar si es un palíndromo o no. 
    Los palíndromos son palabras que se leen igual aún estando invertido.
*/

function coincidencias(frase, word){

    let texto = frase
                .toLowerCase()
                .replace(/[¡!.,-]/gi, '')
                .trim();    
    let resul = 0;

    if(texto.includes(word)){
        let words = texto.split(' ');
        let mapa = {};
        
        for(let word of words){
            if(mapa[word]){
                mapa[word]++;
            }else{
                mapa[word] = 1;
            }
        }

        resul = mapa[word];

    }else{
        resul = 0;
    }

    return resul;
}


console.log(
    "Número de coincidencias en la frase: ",
    coincidencias("El pollo mira pollo la choza pollo", "pollo")
);
