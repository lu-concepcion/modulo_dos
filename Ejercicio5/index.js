var mayor = 0
var nombre_mayor=""
//Ejercicio 5
var contador=0
do{
    var nombre = prompt("Introduce nombre");
    if(nombre == "Salir"){
        if(contador >3){
            break;
        }
        
    }else{
        var edad = prompt("Introduce edad");
        if(edad>mayor){
            mayor = edad
            nombre_mayor = nombre
        }
        contador++;
    }
}while(contador >=0)   
document.write("El mayor es "+ nombre_mayor)