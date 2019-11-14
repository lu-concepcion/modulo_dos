// variable edad guardará lo introducido en el prompt
var edad = prompt("Introduce tu edad");
// comprobacion que la variable sea un numero y no este vacia
if (isNaN(edad) || edad == "") 
    alert("Introduce un número valido");
else
    //Compruebo la edad, según su edad muestro el mensaje
    alert((edad > 65) ? "Te puedes jubilar" : "No te puedes jubilar");