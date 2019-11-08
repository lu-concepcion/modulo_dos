// Escribir un algoritmo que solicite por teclado edad y nombre de una persona, para finalizar debo ingresar 
//el texto: “Salir” e indicarme el nombre de la persona de mayor edad.

// Al menos se deben ingresar 4 nombres

// Utilizar OBJETOS

var contador=0;
var edadAuxiliar=0;
var nombreAuxiliar='';
var persona=[
    {
        nombre,
        edad
    }
]
do{
    var nombreIngresado = prompt("Ingrese su nombre");
    if(nombre=='Salir')
    {
        if(contador>3){
            break;
        }
    }
    else{
        persona[contador].nombre=nombreIngresado;
        var edadIngresado = prompt("Ingrese su Edad");
        persona[contador].edad=edadIngresado;
        contador++;
    }
}while(contador>=0);

for(i=0;i<contador;i++){
    if(edadAuxiliar<persona[i].edad){
        edadAuxiliar=persona[i].edad;
        nombreAuxiliar=persona[i].nombre;
    }
}