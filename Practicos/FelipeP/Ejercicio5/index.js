let contador = "";
let nombre, edad;
let edadMasAlta = 0;
let NombrePersonaMasEdad = "";

while(true) {
    nombre = prompt('Ingresa nombre de persona número: ' + (contador + 1));
    if (contador >= 4 && nombre == 'Salir') {
        break;
    } else if (nombre == 'Salir') {
        continue;
    } else {
        edad = parseInt(prompt('Ingresa edad de persona número: ' + (contador + 1)));
        if (edad > edadMasAlta) {
            NombrePersonaMasEdad = nombre;
            edadMasAlta = edad;
        }
    }
    contador++;
}

alert(NombrePersonaMasEdad);