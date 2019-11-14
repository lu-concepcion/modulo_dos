let sucesiones = 0;
let cadenaCompleta = '0, 1, ';
let var1 = 1;
let var2 = 1;

while(true){
    sucesiones = prompt('Ingresa el número de secesiones (entre 2 y 15)');
    if (sucesiones < 3 || sucesiones > 15) {
        alert('Error: Ingresa solo números entre 3 y 15')
    } else {
        break;
    }
}

for (let i = 0; i < sucesiones; i++) {
    cadenaCompleta += (i+1) == sucesiones? var2: var2 + ', ';
    var2 = var1 + var2;
    var1 = var2 - var1;
}

document.write(cadenaCompleta);