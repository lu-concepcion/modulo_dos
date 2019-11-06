// variable guardará lo introducido en el prompt
var contador = 0;
var lenguaje = "";
do{
    lenguaje = prompt("Ingrese un lenguaje de programación");

    if(lenguaje != "Python"){
        if(contador == 0){
            lenguajes = lenguaje;
        }else{
            lenguajes = lenguajes + " - " + lenguaje;
        }
        contador++;
    }else{
        if(contador >= 4 && lenguaje == "Python"){
            lenguajes = lenguajes + " - " + lenguaje;
        }
        lenguaje == "";
    }

}while(contador < 4 && lenguaje != "Python" );

alert(lenguajes)