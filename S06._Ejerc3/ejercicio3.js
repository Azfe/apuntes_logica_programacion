/*
    Dada una palabra, buscarla en una frase y devolver cuantas veces se repiten.
    Los palíndromos son palabras que se leen igual aún estando invertido.
    La frase y la palabra deben ser parámetros de una función.
*/

let frase = "El pollo mira pollo la choza pollo";
let word =  'pollo';
let resul;

function countWord(frase, word){    
    
    let count = 0;

    frase = frase
    .toLowerCase()
    .replace(/[¡!.,-]/gi, '') // reemplaza las comas por nada
    .trim();

    if(frase.includes(word)){
           
        let words = frase.split(' ');
        console.log(words);

        for(let i = 0; i < words.length; i++){

            if(words[i] == word){
                count++;
            }
        }
    }else{
        count = 0;
    }  

    return count;
}

resul = countWord(frase, word);

if(resul == 0){
    console.log("No contiene la palabra: " + word);
}else{
    console.log("La búsqueda aparece " + resul + " veces.");
}