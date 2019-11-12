// Día 1 funciones
const esNumero = texto => {
    if (!isNaN(texto)) {
        return true;
        console.log('true');
    }
    return false;
    console.log('false');
}

const esTexto = texto => {
    if (isNaN(texto)) {
        return true;
    }
    return false;
}

const convierteMayuscula = texto => {
    return texto.toUpperCase();
}

const convierteMinuscula = texto => {
    return texto.toLowerCase();
}

const campoVacio = texto => {
    return texto === '';
}

const cuentaVocales = texto => {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == 'a' || texto.charAt(i) == 'e' || texto.charAt(i) == 'i' || texto.charAt(i) == 'o' || texto.charAt(i) == 'u') {
            contador++;   
        }
    }
    return contador;
}

const contieneEspacios = texto => {
    return texto.indexOf(' ') === -1;
}

const esPalindromo = texto => {
    let textoAlRevez = '';
    for (let i = texto.length; i > 0; i--) {
        textoAlRevez += texto.charAt(i-1);
    }
    console.log(textoAlRevez);

    return texto == textoAlRevez;
}

const generaAleatorios = (minimo,maximo) => {
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}

const seRepite = (numero, arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (numero == arreglo[i]) {
            return true;
        }
    }
    return false;
}

// Día 2 funciones
const calcular = (numero1, numero2, operacion) => {
    switch (operacion) {
        case 1:
        return numero1 + numero2;
        case 2:
            return numero1 - numero2;
        case 3:
            return numero2 == 0? 'Error: No se puede dividir por 0': numero1/numero2;
        case 4:
            return numero1 * numero2;
        default:
            break;
    }
}

const calcularPorcentaje = (numero1, numero2) => {
    return (numero1/100) * numero2;
}

const generaDigitoVerificador = rut => {
    let rutAlRevez = '';
    let serie = [2,3,4,5,6,7];
    let sumaTotal = 0;
    let contador = 0;
    let multiplica = 0;
    let final = 0;

    for (let i = rut.length; i > 0; i--) {
        rutAlRevez += rut.charAt(i-1);
    }

    for (let i = 0; i < rutAlRevez.length; i++) {
        sumaTotal += parseInt(rutAlRevez.charAt(i)) * serie[contador];
        if (i == contador) {
            contador = 0;
        }
    }
    multiplica = Math.trunc(sumaTotal/11) * 11;
    sumaTotal = sumaTotal - multiplica;
    final = 11 - sumaTotal;

    if (final == 11) {
        return 0;
    } else if (final == 10) {
        return 'K';
    }
    return final;

}

export {
    esNumero,
    esTexto,
    convierteMinuscula,
    convierteMayuscula,
    cuentaVocales,
    esPalindromo,
    campoVacio,
    contieneEspacios,
    generaAleatorios,
    seRepite,
    calcular,
    calcularPorcentaje,
    generaDigitoVerificador
}