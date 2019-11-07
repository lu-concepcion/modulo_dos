var contador = 0;
var lenguajes = "";
var salir = false;
do{
    lenguaje = prompt("Ingrese un lenguaje de programación");

    if(lenguaje != "Python"){ //Si no es python
        if(contador == 0){
            lenguajes = lenguaje;
        }else{
            lenguajes = lenguajes + " - " + lenguaje;
        }
        contador++;
    }else{ //Si es python
        if(contador >= 4){
            lenguajes = lenguajes + " - " + lenguaje;
            salir = true;
        }
    }

}while(salir == false);

alert(lenguajes)