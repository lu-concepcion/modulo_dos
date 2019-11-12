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
        default:
            break;
    }
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
    seRepite
}