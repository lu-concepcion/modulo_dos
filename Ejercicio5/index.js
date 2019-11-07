var contador = 0;
var nombreMayor = "";
var edadMayor = "";
var salir = false;
do{
    // do{
    //     nombre = prompt("Ingrese el nombre");
    //     if(nombre == "Salir" && contador < 4){
    //         alert("No puede salir sin ingresar al menos 4");
    //     }
    // }while(nombre == "" || salir == "");


    if(nombre == "Salir" && contador >= 4){
        alert("El nombre de la edad mayor es " + nombreMayor);
        salir = true;
    }else{
        edad = prompt("Ingrese la edad");
        if(contador == 0){
            nombreMayor = nombre;
            edadMayor = edad;
        }else{
            if(parseInt(edadMayor) < parseInt(edad)){
                edadMayor = edad;
                nombreMayor = nombre;
            }
        }
        contador++;
    }
}while(salir == false);