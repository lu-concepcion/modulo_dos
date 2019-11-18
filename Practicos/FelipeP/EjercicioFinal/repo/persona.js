//generar datos de personas
const {generaDigitoVerificador,obtenerEdadPersona} = require('../funciones.js');
const {getProfesiones} = require('./profesiones');
const {getVehiculos} = require('./vehiculos');

let arregloPersonas = [];

const setPersona = (body) => {
    const {run,fechaNac,tieneProfesion,tieneVehiculo,vehiculoId,profesionId} = body;

    const digitoVerificador = generaDigitoVerificador(run);
    const edad = obtenerEdadPersona(fechaNac);

    const vehiculos_lista = getVehiculos();
    const profesiones_lista = getProfesiones();

    let marca, modelo, id, nombre;

    vehiculos_lista.forEach(vehiculo => {
        if (vehiculo['id'] == vehiculoId) {
            marca = vehiculo['marca'];
            modelo = vehiculo['modelo'];
        }
    });

    profesiones_lista.forEach(profesion => {
        if (profesion['id'] == profesionId) {
            id = profesion['id'];
            nombre = profesion['nombre'];
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
        arregloPersonas.forEach(persona => {
            if (persona['run'] == rutPersona) {
                array.push(persona);
            }
        });
        return array;
    }
    return arregloPersonas;
}

const getAllPersona = () => {
    return arregloPersonas;
}

const updatePersona = (run,body) => {
    
    const {fechaNac,tieneProfesion,tieneVehiculo,vehiculoId,profesionId} = body;
    const digitoVerificador = generaDigitoVerificador(run);
    const edad = obtenerEdadPersona(fechaNac);

    const vehiculos_lista = getVehiculos();
    const profesiones_lista = getProfesiones();

    let marca, modelo, id, nombre;

    vehiculos_lista.forEach(vehiculo => {
        if (vehiculo['id'] == vehiculoId) {
            marca = vehiculo['marca'];
            modelo = vehiculo['modelo'];
        }
    });

    profesiones_lista.forEach(profesion => {
        if (profesion['id'] == profesionId) {
            id = profesion['id'];
            nombre = profesion['nombre'];
        }
    });

    arregloPersonas.forEach(persona => {
        if (persona['run'] == run) {
            persona['dv'] = digitoVerificador;
            persona['fechaNac'] = fechaNac;
            persona['edad'] = edad;
            persona['tieneProfesion'] = tieneProfesion;
            persona['tieneVehiculo'] = tieneVehiculo;
            persona['vehiculo'].marca = marca;
            persona['vehiculo'].modelo = modelo;
            persona['profesion'].id = id;
            persona['profesion'].nombre = nombre;
        }
    });
}

const deletePersona = run => {
    arregloPersonas.forEach((persona,i) => {
        if (persona['run'] == run) {
            arregloPersonas.splice(i,1);
        }
    });
}

module.exports = {
    setPersona,
    getPersona,
    getAllPersona,
    updatePersona,
    deletePersona
}
