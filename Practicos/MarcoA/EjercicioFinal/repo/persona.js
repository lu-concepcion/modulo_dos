//generar datos de personas
var funciones = require('../funciones');
var profesiones = require('./profesiones');
var vehiculos = require('./vehiculos');

let persona = [];
let arregloPersonas = [];
let arregloCursos = [];
let personaCurso = [];

const setPersona = (body) => {

    const { run, fechaNac, tieneProfesion, tieneVehiculo, vehiculoId, profesionId } = body;

    let digitoVerificador = funciones.generaDigitoVerificador(run);
    let edad = funciones.obtenerEdadPersona(fechaNac);

    let vehiculos_lista = vehiculos.getVehiculos();
    let profesiones_lista = profesiones.getProfesiones();

    let marca, modelo, nombre;

    if (tieneVehiculo) {
        vehiculos_lista.forEach(element => {
            if (element['id'] == vehiculoId) {
                marca = element['marca'];
                modelo = element['modelo'];
            }
        });
    }

    if (tieneProfesion) {
        profesiones_lista.forEach(element => {
            if (element['id'] == profesionId) {
                nombre = element['nombre'];
            }
        });
    }
    persona = {
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
    return ("No se encuentra");
}

const setCurso = (body) => {
    const { codigoCurso: curso, nombre: ramo } = body;
    let cursos = {
        codigoCurso: curso,
        nombre: ramo,
        alumnos: []
    }
    arregloCursos.push(cursos);
}

const añadirAlumnoACurso = (run, body) => {
    const { codigoCurso } = body;
    arregloCursos.forEach(element => {
        if(element['codigoCurso'] == codigoCurso){
            alumnos.push(run);
    }
});
}


const getCursos = (codigoCurso) => {
    let array = [];
    if (codigoCurso) {
        arregloCursos.forEach(element => {
            if (element['codigoCurso'] == codigoCurso) {
                array.push(element);
            }
        });
        return array;
    }
    return ("No deberia salir este mensaje");
}


const delPersona = (rutPersona) => {
    let flag = 1;
    do {
        funciones.eliminarArrayPorValor(persona, "rut", "rut")
        flag = 0;
        return "Rut eliminado"
    } while (flag == 1);
}

module.exports = {
    setPersona,
    getPersona,
    delPersona,
    setCurso,
    getCursos
}
