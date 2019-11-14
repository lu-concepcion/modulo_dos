import{
    mayoresDeEdad
}from '../funciones.js';

let arrayPersonas = [
    {
        id: 1,
        nombre: "pedro",
        fechaNacimiento: new Date(1998, 1, 1)
    },
    {
        id: 2,
        nombre: "juan",
        fechaNacimiento: new Date(2015, 2, 1)
    },
    {
        id: 3,
        nombre: "diego",
        fechaNacimiento: new Date(1960, 3, 1)
    }
];

let arrayMayores = mayoresDeEdad(arrayPersonas, 20);
if(arrayMayores.length == 0){
    alert("No hay mayores de edad");
}else{
    let mensaje = "Los mayores de edad son:";
    for(let i=0; i<arrayMayores.length; i++){
        mensaje += "\n " + arrayMayores[i].nombre;
    }
    alert(mensaje);
}