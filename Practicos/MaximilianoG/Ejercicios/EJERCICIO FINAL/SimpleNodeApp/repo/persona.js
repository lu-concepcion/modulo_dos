//generar datos de personas
var funciones = require('../funciones');
var profesiones = require('./profesiones');
var vehiculos = require('./vehiculos');

let arregloPersonas = [];

const setPersona = (body) => {

    const {run,fechaNac,tieneProfesion,tieneVehiculo,vehiculoId,profesionId} = body;

    let digitoVerificador = funciones.generaDigitoVerificador(run);
    let edad = funciones.obtenerEdadPersona(fechaNac);

    let vehiculos_lista = vehiculos.getVehiculos();
    let profesiones_lista = profesiones.getProfesiones();

    let marca, modelo, id, nombre;

    vehiculos_lista.forEach(element => {
        if (element['id'] == vehiculoId) {
            marca = element['marca'];
            modelo = element['modelo'];
        }
    });

    profesiones_lista.forEach(element => {
        if (element['id'] == profesionId) {
            id = element['id'];
            nombre = element['nombre'];
        }
    });

    let persona = {
        run: run,
        dv: digitoVerificador,
        fechaNac: fechaNac,
        edad: edad,
        tieneProfesion: tieneProfesion,
        tieneVehiculo: tieneVehiculo,
        vehiculo: {
          marca: marca,
          modelo: modelo
        },
        profesion: {
          id: id,
          nombre: nombre
        }
    }

    arregloPersonas.push(persona);
}

const getPersona = (rutPersona) => {
    let array = [];
    if (rutPersona) {
        arregloPersonas.forEach(element => {
            if (element['run'] == rutPersona) {
                array.push(element);
            }
        });
        return array;
    }
    return arregloPersonas;
}

module.exports = {
    setPersona,
    getPersona
}