// Creo las variables a utilizar
const lenguajes = [];
var lenguaje = "";
var contador = 0;
var python = false;

//Ejecuto el proceso con un do
do {
    var lenguajeInput = prompt("Ingresa un lenguaje de programación");
    if (lenguajes.indexOf(lenguajeInput) == -1) {
    contador++;
    lenguajes.push(lenguajeInput.toLowerCase());
    }
}while(contador <= 4); // Detengo el proceso hasta que llegue a 4
for (const item in lenguajes) {
    if (lenguajes[item] == "python")
        python = true; //Si encuentro en el array python lo cambio a true
    lenguaje += lenguajes[item] + " - ";
}
 if (python) alert("Ingresastes Python");
 alert(lenguaje);
