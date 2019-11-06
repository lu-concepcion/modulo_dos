var nota = prompt("Introduce tu nota de calificación");
if (isNaN(nota) || nota == "") {
    alert ("Por favor introduce un número válido");
}
else {
    if (nota <= 3)
    alert ("Muy Bajo!")
    else if (nota > 3 && nota <= 5)
    alert("Regular!");
    else if (nota > 5 && nota <= 7)
    alert ("Muy Buenos!");
}