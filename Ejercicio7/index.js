let sucesiones = 0;
let anterior = 1;
let cadenaCompleta = '';
let suma = 0;

while(true){
    sucesiones = prompt('Ingresa el número de secesiones (entre 2 y 15)');
    if (sucesiones < 3 ||  sucesiones > 15) {
        alert('Error: Ingresa solo números entre 3 y 15')
    } else {
        break;
    }
}

 for (let i = 0; i < sucesiones; i++) {
     suma = suma + anterior;
     cadenaCompleta += suma + ',';
     anterior = suma;
 }
 document.write(cadenaCompleta);