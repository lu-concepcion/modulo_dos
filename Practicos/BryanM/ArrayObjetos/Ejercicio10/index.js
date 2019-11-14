var numRomanos = [
    {
        numero: "I",
        valor: "Uno"
    },
    {
        numero: "II",
        valor: "Dos"
    },
    {
        numero: "III",
        valor: "Tres"
    },
    {
        numero: "IV",
        valor: "Cuatro"
    },
    {
        numero: "V",
        valor: "Cinco"
    },
    {
        numero: "VI",
        valor: "Seis"
    },
    {
        numero: "VII",
        valor: "Siete"
    },
    {
        numero: "VIII",
        valor: "Ocho"
    },
    {
        numero: "IX",
        valor: "Nueve"
    },
    {
        numero: "X",
        valor: "Diez"
    }
]
do {
    var resp = prompt("Ingrese numero romano: ");
    resp = resp.toUpperCase();
}while(resp.length <= 0 || resp.length >= 5)

for(var i=0;i < 10; i++){
    if(numRomanos[i].numero == resp){
        alert("El valor es: " + numRomanos[i].valor);
        break;
    }
    if(i == 9){
        alert("Numero desconocido");
    }
}