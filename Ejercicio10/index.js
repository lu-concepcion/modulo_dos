let romanos = [];
let letraRomana = '';
let letraUsuario = '';

for (let i = 1; i <= 10; i++) {
    if (i == 1) {letraRomana = 'I'}
    if (i == 2) {letraRomana = 'II'}
    if (i == 3) {letraRomana = 'III'}
    if (i == 4) {letraRomana = 'IV'}
    if (i == 5) {letraRomana = 'V'}
    if (i == 6) {letraRomana = 'VI'}
    if (i == 7) {letraRomana = 'VII'}
    if (i == 8) {letraRomana = 'VIII'}
    if (i == 9) {letraRomana = 'IX'}
    if (i == 10) {letraRomana = 'X'}
    var romano = {
        numRomano: letraRomana,
        numNormal : i
    } 
    romanos[i-1] = romano;
}

let salirCicloWhile = false;

while (!salirCicloWhile){
    letraUsuario = prompt('Ingresa número romano (1 a 10)');
    for (let i = 0; i < romanos.length; i++) { 
        if (romanos[i].numRomano === letraUsuario) {
            alert(romanos[i].numRomano + ' es el número: ' + romanos[i].numNormal);
            salirCicloWhile = true;
            break;
        } 
    }
    if (!salirCicloWhile) {
        alert('No se encontró número correspondiente');
    }
}





