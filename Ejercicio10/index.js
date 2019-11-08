romano = {
    numRomano: '',
    numNormal : 0
}

romano.numRomano = prompt('Ingresa número romando (solo del 1 al 10').toUpperCase();

switch (romano.numRomano) {
    case 'I':
        romano.numNormal = 1;
        break;
    case 'II':
        romano.numNormal = 2;
        break;
    case 'III':
        romano.numNormal = 3;
        break;
    case 'IV':
        romano.numNormal = 4;
        break;
    case 'V':
        romano.numNormal = 5;
        break;
    case 'VI':
        romano.numNormal = 6;
        break;
    case 'VII':
        romano.numNormal = 7;
        break;
    case 'VIII':
        romano.numNormal = 8;
        break;
    case 'IX':
        romano.numNormal = 9;
        break;
    case 'X':
        romano.numNormal = 10;
        break;
    default:
        break;
}

alert(romano.numRomano + ' es el número: ' + romano.numNormal)

