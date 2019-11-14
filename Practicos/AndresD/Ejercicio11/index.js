var personaMayor={
    edad: 0,
    nombre: ""
}
var contador = 0;
do {
     do {
    var nombreNuevo = prompt("Indique su nombre"); 
     } while (!isNaN(nombreNuevo));
    
    if (nombreNuevo == "Salir") {
        if(contador >= 4){ 
        break;}
    }
else{

    do {
        contador++;
        var edadNueva = prompt("Indique su edad"); 
    } while (isNaN(edadNueva));
   
  if (edadNueva > personaMayor.edad ) {
      personaMayor.edad = edadNueva;
      personaMayor.nombre= nombreNuevo;
  }

}

} while (nombreNuevo != "Salir" || contador < 4);

alert(`Persona Mayor \nNombre: ${personaMayor.nombre} \nEdad: ${personaMayor.edad}`);