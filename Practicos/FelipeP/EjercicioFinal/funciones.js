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

const obtenerEdadPersona = (fechaNacimiento) => {
    // 18/09/1992
    let dia, mes, anio;
    let edad = 0;
    const hoy = new Date();

    if (fechaNacimiento.charAt(0) == '0') {
        dia = fechaNacimiento.charAt(1);
    } else {
        dia = fechaNacimiento.substr(0,1);
    }

    if (fechaNacimiento.charAt(3) == '0') {
        mes = fechaNacimiento.charAt(4);
    } else {
        mes = fechaNacimiento.substr(3,4);
    }
    anio = fechaNacimiento.substr(6,9);

    const fecha = new Date(anio,mes,dia);

        if ((hoy.getMonth()+1) >= fecha.getMonth() && hoy.getDate() >= fecha.getDate()) {
            edad = hoy.getFullYear() - fecha.getFullYear();
        } else {
            edad = (hoy.getFullYear()-1) - fecha.getFullYear();
        }
    return edad;
}

module.exports = {
    generaDigitoVerificador,
    obtenerEdadPersona
}