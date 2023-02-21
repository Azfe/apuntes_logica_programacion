class Coche {
    constructor(marca, modelo, velocidad, modelYear){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.modelYear = modelYear;
    }

    acelerar(){
        this.velocidad += 1;
    }

    frenar(){
        this.velocidad -= 1;
    }
}

var coche1 = new Coche('BMW', 'model', 200, 2017);
var coche2 = new Coche('Audi', 'model', 230, 2019);
var coche3 = new Coche('Seat', 'model', 180, 2011);
var coche4 = new Coche('Skoda', 'model', 220, 2020);

document.write("<h1>Velocidad: " + coche1.velocidad + "</h1>");
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();

document.write("<h1>Velocidad: " + coche1.velocidad + "</h1>");