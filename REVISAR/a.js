var contador = 0;
var texto = "";
while (contador < 4 || NombreLenguaje != "Python") 
{
    var NombreLenguaje = prompt("ingrese 4 nombres de lenguajes de programación");
    if (texto == "") 
    {
        texto = NombreLenguaje;    
    } else {
        texto = texto + "_" + NombreLenguaje; 
    }
    contador++;
}

alert(texto);