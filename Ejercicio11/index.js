var persona = new Object();
persona.Nombre;
persona.Edad;
var corriendo = 1;
var contador = 0;
var nombre;
persona.Nombre = [];
persona.Edad = [];
do {
    nombre = prompt("Ingresar nombre");
    if ((nombre == "Salir") && (contador >= 4)) break;
    if ((nombre == "Salir") && (contador < 4)) continue;
    edad = prompt("Ingresar edad");
    contador++;
    persona.Nombre.push(nombre);
    persona.Edad.push(edad);
} while (corriendo);
var indiceMayor = 0,edadMayor=0;

for (var i = 0; i < contador; i++){
    if(persona.Edad[i] > edadMayor){
        edadMayor=persona.Edad[i];
        indiceMayor = i;
    }
}
alert(persona.Nombre[indiceMayor] + " " + persona.Edad[indiceMayor])