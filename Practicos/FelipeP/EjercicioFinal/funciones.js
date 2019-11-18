const testing = () => {
    return "test";
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
        contador++;
        if (contador == serie.length) {
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

const obtenerEdadPersona = (fechaNacimiento) => {
    // Desglose fecha de nacimiento
    let nacimiento = fechaNacimiento.split('/');
    let dia = Number(nacimiento[0]);
    let mes = Number(nacimiento[1]);
    let anio = Number(nacimiento[2]);
    
    // Desglose fecha actual
    const hoy = new Date();
    let hoyDia = hoy.getDate();
    let hoyMes = hoy.getMonth()+1;
    let hoyAnio = hoy.getFullYear();

    let edad = 0;

    if (hoyMes > mes) {
        edad = hoyAnio - anio;
    } else {
        edad = (hoyAnio-1) - anio;
    }
    if (hoyMes == mes) {
        if (hoyDia >= dia) {
            edad = hoyAnio - anio;
        } else {
            edad = (hoyAnio-1) - anio;
        }
    }
    return edad;
}

const personaExiste = (run, arregloPersonas) => {
    let existe = false;
    arregloPersonas.forEach(persona => {
        if (persona['run'] == run) {
            existe = true;
        }
    });
    return existe;
}

const cursoExiste = (runPersona, runEnCurso) => {
    let existe = false;
    if (runPersona == runEnCurso) {
        existe = true;
    }
    return existe;
}

module.exports = {
    generaDigitoVerificador,
    obtenerEdadPersona,
    personaExiste,
    cursoExiste
}