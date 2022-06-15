

//EJEMPLO 1

for (let i = 0 ; i < 10 ; i++) {
    
    let numero = prompt("Ingrese un numero");
    numero = parseInt (numero);
    
    console.log("El siguiente numero es", numero + 1);
}

//EJEMPLO 2

let nombre;

do {
    nombre = prompt("Ingrese un nombre o ESC para salir:");
    console.log("Bienvenido:" , nombre);
}

while (nombre != "ESC");

//EJEMPLO 3

let numero = prompt("Ingrese un numero");
numero = parseInt(numero);

for (let i = 0 ; i < numero ; i++ ) {
    console.log("Hola")
}