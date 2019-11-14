var contador = 1;
var regNombre;
var regEdad = 0;
aux = 0;
do{
    nombre = prompt("Ingrese nombre para persona " + contador);
    if(nombre == "Salir"){
        if(contador > 4){
            aux = 1;
            break;
        }
    }
    else {
        edad = prompt("Ingrese edad para persona " + contador);
        if (edad == "Salir"){
            if(contador > 4){
                aux = 1;
                break;
            }
        }
        if (edad > regEdad){
            regNombre = nombre;
            regEdad = edad;
        }
        contador ++;
    }

}while(aux = 1)

alert("La persona de mayor edad es " + regNombre + " con edad de: " + regEdad)