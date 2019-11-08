let numRomano = '';
let numSalida = 0;

numRomano = prompt('Ingresa número romando (solo del 1 al 10').toUpperCase();

switch (numRomano) {
    case 'I':
        numSalida = 1;
        break;
    case 'II':
        numSalida = 2;
        break;
    case 'III':
        numSalida = 3;
        break;
    case 'IV':
        numSalida = 4;
        break;
    case 'V':
        numSalida = 5;
        break;
    case 'VI':
        numSalida = 6;
        break;
    case 'VII':
        numSalida = 7;
        break;
    case 'VIII':
        numSalida = 8;
        break;
    case 'IX':
        numSalida = 9;
        break;
    case 'X':
        numSalida = 10;
        break;
    default:
        break;
}

romano = {
    valor : numSalida;
}