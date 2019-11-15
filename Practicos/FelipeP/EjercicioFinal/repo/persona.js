//generar datos de personas

let arregloPersonas = [];

const setPersona = (rut,digito,fechaNacimiento,edad_persona,tieneVehiculo,tieneProfesion,marca_vehiculo,modelo_vehiculo,id_profesion,nombre_profesion) => {

    let persona = {
        run: rut,
        dv: digito,
        fechaNac: fechaNacimiento,
        edad: edad_persona,
        tieneProfesion: tieneVehiculo,
        tieneVehiculo: tieneProfesion,
        vehiculo: {
          marca: marca_vehiculo,
          modelo: modelo_vehiculo
        },
        profesion: {
          id: id_profesion,
          nombre: nombre_profesion
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
