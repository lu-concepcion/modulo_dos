//generar datos de personas
var funciones = require('../funciones')

let arregloPersonas = [];

const setPersona = (body) => {

    const {run,fechaNac,tieneProfesion,tieneVehiculo,vehiculoId,profesionId} = body;

    let digitoVerificador = funciones.generaDigitoVerificador(run);

    let persona = {
        run: run,
        dv: digitoVerificador,
        fechaNac: fechaNac,
        edad: 22,
        tieneProfesion: tieneProfesion,
        tieneVehiculo: tieneVehiculo,
        vehiculo: {
          marca: 'citroen',
          modelo: 'xx-1'
        },
        profesion: {
          id: 1,
          nombre: 'ingenierous'
        }
    }

    arregloPersonas.push(persona);
}

const getPersona = () => {
    return arregloPersonas;
}

module.exports = {
    setPersona,
    getPersona
}
