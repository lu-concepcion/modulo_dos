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
    console.log(rutAlRevez);

    for (let i = 0; i < rutAlRevez.length; i++) {
        sumaTotal += parseInt(rutAlRevez.charAt(i)) * serie[contador];
        console.log('num rut: ' + rutAlRevez.charAt(i) + ' * serie:' + serie[contador]);
        contador++;
        if (contador == serie.length) {
            contador = 0;
        }
    }
    console.log('Suma total: ', sumaTotal);
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

const encontrarElemento = (elemento, arreglo) => {
    return arreglo.includes(elemento);
}

const buscarEnArray = (arreglo, propiedad, valor) => {
    let objeto = {};
    arreglo.forEach(element => {
        if (element[propiedad] == valor) {
            objeto = element;
        }
    });
    return objeto;
}

const filtrarEnArray = (arreglo, propiedad, valor) => {
    let objetos = [];
    arreglo.forEach(element => {
        if (element[propiedad] == valor) {
            objetos.push(element);
        }
    });
    return objetos;
}

// Funciones día 3
const ordenaMenorMayor = arreglo => {
    let aux;
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 1; j < (arreglo.length - i); j++) {
            if (arreglo[j - 1] > arreglo[j]) {
                aux = arreglo[j - 1];
                arreglo[j - 1] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }
    return arreglo;
}
const ordenaMayorMenor = arreglo => {
    let aux;
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 1; j < (arreglo.length - i); j++) {
            if (arreglo[j - 1] < arreglo[j]) {
                aux = arreglo[j - 1];
                arreglo[j - 1] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }
    return arreglo;
}

const generaFactorial = numero => {
    let numeroFactorial = 1;
    for (let i = 0; i < numero; i++) {
        numeroFactorial = numeroFactorial * (i+1); 
    }
    return numeroFactorial;
}

const textoEnParentisis = cadena => {
    let textos = '';
    let aux = '';
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) == '(') {
            while(true) {
                if (cadena.charAt(i+1) == ')' || (i+1) == cadena.length) {
                    if ((i+1) == cadena.length) {
                        aux = '';
                    }
                    break;
                }
                aux += cadena.charAt(i+1);
                if (cadena.charAt(i+1) == '(') {
                    aux = '';
                    break;
                }
                i++;
            }
            textos += aux + ' ';
            aux = '';
        }  
    }
    if (textos.trim().length == 0) {
        return 'No se encontro texto';
    }
    textos = textos.replace(/^\s*|\s*$/g,"");
    return textos;
}

const obtenerEdadPersona = (arreglo, edadLimite) => {
    let personas = [];
    let fecha = '';
    let edad = 0;
    const hoy = new Date();

    arreglo.forEach(element => {
        fecha = element['fechaNacimiento'];
        if ((hoy.getMonth()+1) >= fecha.getMonth() && hoy.getDate() >= fecha.getDate()) {
            edad = hoy.getFullYear() - fecha.getFullYear();
        } else {
            edad = (hoy.getFullYear()-1) - fecha.getFullYear();
        }
        if (edad > edadLimite) {
            personas.push(element);
        }
    });
    return personas;
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
    generaDigitoVerificador,
    encontrarElemento,
    buscarEnArray,
    filtrarEnArray,
    ordenaMenorMayor,
    ordenaMayorMenor,
    generaFactorial,
    textoEnParentisis,
    obtenerEdadPersona
}