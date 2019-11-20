var funciones = require('../funciones.js')
var vehiculos = require('./vehiculos.js')
var profesiones = require('./profesiones.js')
var cursos = require('./cursos.js')
let personas = [];

const obtenerPersonas = (run) => {
    let filtrado={};
    for (let i = 0; i < personas.length; i++) {
        if (Object.values(personas[i])[0]==run) {
            filtrado = personas[i];
        }   
    }
    return filtrado;
}

const guardarPersona = (body) =>{
    let personaNueva = {};
    let run, nombre, fechaNac, tieneProfesion, 
        tieneVehiculo, vehiculoId, profesionId;

    let cantidadPropiedades = Object.keys(body).length;
    let objetoProfesion = {};
    let objetoVehiculo = {};
  
    for (let i = 0; i < cantidadPropiedades; i++) {
        if (Object.keys(body)[i]== "run") {
            run = Object.values(body)[i];
        }
        if (Object.keys(body)[i]== "nombre") {
            nombre = Object.values(body)[i];
        }

        if (Object.keys(body)[i]== "fechaNac") {
            fechaNac = Object.values(body)[i];
        }
        if (Object.keys(body)[i]== "tieneProfesion") {
            tieneProfesion = Object.values(body)[i];
        }
        if (Object.keys(body)[i]== "tieneVehiculo") {
            tieneVehiculo = Object.values(body)[i];
        }
        if (Object.keys(body)[i]== "vehiculoId") {
            vehiculoId = Object.values(body)[i];
        }
        if (Object.keys(body)[i]== "profesionId") {
            profesionId = Object.values(body)[i];
        }
    }


    if ( tieneVehiculo) {          
        objetoVehiculo = funciones.objetoEnArray(vehiculos.vehiculos, "id", vehiculoId)    
    }
    if (tieneProfesion) {
        objetoProfesion = funciones.objetoEnArray(profesiones.profesiones, "id", profesionId)    
    }   
            personaNueva.run = run;
            personaNueva.nombre = nombre;
            personaNueva.dv = funciones.calcularDigitoVerificador(run);
            personaNueva.fechaNac = fechaNac;
            personaNueva.edad = funciones.calcularEdad(fechaNac);
            personaNueva.profesion = objetoProfesion;     
            personaNueva.vehiculo = objetoVehiculo;

            personas.push(personaNueva);
            
    }




    



module.exports = {
    guardarPersona,
    obtenerPersonas
}