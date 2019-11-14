var contador = 0;
var edadmayor = 0;
var nombremayor;
do{
    var nombre = prompt("Introduce un Nombre");
    if(contador > 3){
        if(nombre=="Salir"){
            break;
        }
    }else{
        var edad = prompt("Introduce su Edad");
        if(edad>edadmayor){
            edadmayor=edad;
            nombremayor=nombre;
        }
    }
    contador++;
}while (nombre != "Salir" || edad != "Salir" && contador < 4)
alert(nombremayor + " es la persona mayor con " + edadmayor)