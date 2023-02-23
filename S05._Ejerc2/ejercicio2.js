/*
    Dada una cadena de texto, comprobar si es un palíndromo o no. 
    Los palíndromos son palabras que se leen igual aún estando invertido.
*/

palindromo("luzazul");
//palindromo("dabale arroz a la zorra el abad");
//palindromo("otto");

function palindromo(texto){
    this.texto = texto.trim();
    texto = texto.split('');  
    let valido = 0;
    let error = 0; 
    
    var arrayRev = new Array(texto.length);

    let j = 0; 
    // RELLENAR ARRAY REVERSE
    for(let i = (texto.length-1) ; i >= 0; i--){

        arrayRev[j] = texto[i];
        j++;        
    }
    
    for(let i = 0; i < texto.length; i++){
        console.log(arrayRev[i]);
    }
    
    let cadena = arrayRev.join('');
  
    console.log(cadena);
    //console.log(cadena.replace(/,/g, ''));

    
    for(let i = 0; i < texto.length; i++){        

        if(arrayRev[i] === texto[i]){            
            valido++;
        }else{            
            error++;
        }
    }

    if(valido === texto.length && error === 0){
        console.log("La palabra introducida es un palíndromo");
    }else{
        console.log("¡Error! La palabra introducida NO es un palíndromo");
    }
}