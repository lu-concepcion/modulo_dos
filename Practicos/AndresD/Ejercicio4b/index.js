
var lista = "";
var contador = 0;

do {
    var lenguaje = prompt("Ingrese un lenguaje de programacion");
  
     if(lenguaje=="Python"){   
      if (contador>=3 ) {
        lista = lista + lenguaje; 
        contador = parseInt(contador)+1; 
      } 
    }
       
    else{ 
    lista = lista + lenguaje + " - "; 
    contador = parseInt(contador)+1;
}
} while (contador < 3 || lenguaje != "Python");

alert(lista)