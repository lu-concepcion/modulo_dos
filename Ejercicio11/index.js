var personaMayor={
    edad: 0,
    nombre: ""
}

do {
     do {
    var nombreNuevo = prompt("Indique su nombre"); 
     } while (!isNaN(nombreNuevo));
    
    if (nombreNuevo == "Salir") {
        break;
    }
else{
    do {
        var edadNueva = prompt("Indique su edad"); 
    } while (isNaN(edadNueva));
   
  if (edadNueva > personaMayor.edad ) {
      personaMayor.edad = edadNueva;
      personaMayor.nombre= nombreNuevo;
  }

}

} while (nombreNuevo != "Salir");

alert(`Persona Mayor \nNombre: ${personaMayor.nombre} \nEdad: ${personaMayor.edad}`);