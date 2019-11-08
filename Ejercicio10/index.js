var numeroRomano = [
    {
        romano: "I",
        nombre: "uno"
    },
    {
        romano: "II",
        nombre: "dos"
    },
    {
        romano: "III",
        nombre: "tres"
    },
    {
        romano: "IV",
        nombre: "cuatro"
    },
    {
        romano: "V",
        nombre: "cinco"
    },
    {
        romano: "VI",
        nombre: "seis"
    },
    {
        romano: "VII",
        nombre: "siete"
    },
    {
        romano: "VIII",
        nombre: "ocho"
    },
    {
        romano: "IX",
        nombre: "nueve"
    },
    {
        romano: "X",
        nombre: "diez"
    },
];

var numeroComparado = prompt("Ingrese numero romano de I - X");

for (let i = 0; i < numeroRomano.length; i++) {
    if (numeroRomano[i].romano == numeroComparado) {
        alert(numeroRomano[i].nombre)
    }
    
}