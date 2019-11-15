count = 0
do{
var perNom = prompt("Ingrese el nombre de una persona");

if (isNaN(parseInt(perNom)) == true){

    count++

}else{

    alert ("Debe ingresar solo texto");

}

}while(count < 1);
do{
var perApe = prompt("Ingrese su apellido");
if (isNaN(parseInt(perApe)) == true){

    count++

}else{

    alert ("Debe ingresar solo texto");

}
}while(count < 2);
do{
var perEdad = prompt("Ingrese la edad de la persona");
if (isNaN(parseInt(perEdad)) == false){

    count++

}else{

    alert ("Debe ingresar solo Números");

}
}while(count < 3);
do{
var perPro = prompt("Ingrese la profesion de la persona");
if (isNaN(parseInt(perPro)) == true){

    count++

}else{

    alert ("Debe ingresar solo texto");

}
}while(count < 4);


var persona={

    nombre:perNom,
    apellido:perApe,
    edad:perEdad,
    profesion:perPro

};

persona.nombre
persona.apellido
persona.edad
persona.profesion

document.write(persona.nombre+", ", persona.apellido+", ", persona.edad+", ", persona.profesion)
