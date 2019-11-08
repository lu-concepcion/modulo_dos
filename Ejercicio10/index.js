let romanos = [];
let letraRomana = '';
let letraUsuario = '';

for (let i = 1; i <= 10; i++) {
    letraRomana = i == 0? 'I':'';
    letraRomana = i == 1? 'II':'';
    letraRomana = i == 2? 'III':'';
    letraRomana = i == 3? 'IV':'';
    letraRomana = i == 4? 'V':'';
    letraRomana = i == 5? 'VI':'';
    letraRomana = i == 6? 'VII':'';
    letraRomana = i == 7? 'VIII':'';
    letraRomana = i == 8? 'IX':'';
    letraRomana = i == 9? 'X':'';
    romano = {
        numRomano: letraRomana,
        numNormal : (i+1)
    } 
    romanos[i] = romano;
}

for (let i = 0; i < romanos.length; i++) {
    letraUsuario = prompt('Ingresa número romano (1 a 10)');

}



alert(romano.numRomano + ' es el número: ' + romano.numNormal)

