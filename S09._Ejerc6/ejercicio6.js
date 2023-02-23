/*
    Dibujar un cuadrado hueco con asteriscos.
*/
let num;
let resul;
let arrayX = new Array(num);

function ladosX(num){
    
    for(let i = 0; i < num; i++){

        arrayX[i] = '*';
        console.log(i);
    }
    console.log(arrayX);
}


function ladosY(){

}

console.log(ladosX(4));

/*
function cuadrado(num){
    
    resul = num * (porCiento / 100);

    return resul;
}*/


//resul =  cuadrado(num);
//console.log( resul);
