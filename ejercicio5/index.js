var contador = 1;
var guardarNombre;
var guardarEdad = 0;
aux = 0;
do{
    nombre = prompt("Ingrese nombre " + contador);
    if(nombre == "Salir"){
        if(contador > 4){
            aux = 1;
            break;
        }
    }
    else {
        edad = prompt("Ingrese edad  " + contador);
        if (edad == "Salir"){
            if(contador > 4){
                aux = 1;
                break;
            }
        }
        if (edad > guardarEdad){
            guardarNombre = nombre;
            guardarEdad = edad;
        }
        contador ++;
    }

}while(aux = 1)

alert("La persona de mayor edad es " + guardarNombre );