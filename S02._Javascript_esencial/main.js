
// Objetos JSON
var coche = {
    marca: 'Mercedes',
    modelo: 'Clase A',
    maxima: 500,
    modelYear: 2020,
    mostrarDatos(){
        console.log(this.marca, this.modelo, this.maxima, this.modelYear);
    },
    propiedad1: "Valor aleatorio"
}

document.write("<h1>" + coche.modelo + "</h1>");

coche.mostrarDatos();
console.log(coche);

// Promesas
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola mundo";

        if(saludo){
            resolve(saludo);
        }else{
            reject("No hay saludo disponible");
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
})