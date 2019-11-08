let marca = "";
let modelo = "";
let anio = "";
let color = "";

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
    color = prompt('Ingresa color');
    if (isNaN(color) && color != '') {
        break;
    }
    alert('Error: Ingrese solo letras y no dejes campo vacío');
}

var vahiculo = new Object();

vahiculo.marca = marca;
vahiculo.modelo = modelo;
vahiculo.anio = anio;
vahiculo.color = color;

document.write(vahiculo.marca + ', ');
document.write(vahiculo.modelo + ', ');
document.write(vahiculo.anio + ', ');
document.write(vahiculo.color);
console.log(color);

