let marca = "";
let modelo = "";
let anio = "";
let color = "";
let colorHexa = "";

while(true){
    marca = prompt('Ingresa marca');
    if (isNaN(marca) && marca != '') {
        break;
    }
    alert('Error: Ingrese solo letras y no dejes campo vacío');
}
while(true){
    modelo = prompt('Ingresa modelo');
    if (isNaN(modelo) && modelo != '') {
        break;
    }
    alert('Error: Ingrese solo letras y no dejes campo vacío');
}
while(true){
    anio = prompt('Ingresa año');
    if (!isNaN(anio) && anio != '') {
        break;
    }
    alert('Error: Ingrese solo números y no dejes campo vacío');
}
while(true){
    color = prompt('Ingresa color (azul, rojo, blanco)');
    if (isNaN(color) && color != '') {
        switch (color) {
            case 'azul':
                colorHexa = '#0000FF';
                break;
            case 'rojo':
                colorHexa = '#FF0000';
                break;
            case 'blanco':
                colorHexa = '#FFFFFF';
            break;
            default:
                colorHexa = 'No detectado'
                break;
        }
        break;
    }
    alert('Error: Ingrese solo letras y no dejes campo vacío');
}

var vehiculo = {
    marca : marca,
    modelo : modelo,
    anio : anio,
    color : {
        normal : color,
        hexa : colorHexa
    }
}

document.write(vehiculo.marca + ', ');
document.write(vehiculo.modelo + ', ');
document.write(vehiculo.anio + ', ');
document.write(vehiculo.color.normal + ' - color hexadecimal: ' + vehiculo.color.hexa);

