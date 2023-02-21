/*
    Dado un número, devolver su tabla de multiplicar completa.
*/

let num = parseInt(prompt("Introduce un número"));

tablaMultiplicar(num);

function tablaMultiplicar(num){
    let tabla = `Tabla del ${num}`;
    document.write(`<b>${tabla}</b><br>`);

    for(let i = 1; i <= 10; i++){
        let resul = num * i;        
        document.write(`${num} x ${i} = ${resul} <br>`);
    }
}



//document.write(num + " x " + i + " = " + resul) + "<br>";