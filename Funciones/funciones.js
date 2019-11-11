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

// const campoVacio = texto => {
//     if (texto === '') {
//         return true;
//     }
//     return false;
// }

const cuentaVocales = texto => {
    let contador = 0;
    texto.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == 'a' || texto.charAt(i) == 'e' || texto.charAt(i) == 'i' || texto.charAt(i) == 'o' || texto.charAt(i) == 'u') {
            contador++;   
        }
    }
    return contador;
}

export {
    esNumero,
    esTexto,
    convierteMinuscula,
    convierteMayuscula,
    cuentaVocales
}