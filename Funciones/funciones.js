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


export {
    esNumero,
    esTexto,
    convierteMinuscula,
    convierteMayuscula
}