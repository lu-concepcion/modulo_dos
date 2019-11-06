
var lista = "";
var contador = 0;


do {
    var lenguaje = prompt("Ingrese un lenguaje de programacion");
    
switch (lenguaje) {
    case "Phyton":
      if (contador>3 ) {
        lista = lista + lenguaje; 
        contador = parseInt(contador)+1; 
      } 
       

        break;

    default: 
    lista = lista + lenguaje + " - "; 
    contador = parseInt(contador)+1;
        break;
}

} while (contador < 3 || lenguaje != "Phyton");

alert(lista)
