let listadoPersonas=[];
var funciones = require('../funciones')

const guardarPersona = body =>{
    console.log(funciones.filtrarArreglo(body))
    listadoPersonas.push(body)
}


const obtenerPersonas = (run) =>{
    return listadoPersonas;
}

module.exports = {
    guardarPersona,
    obtenerPersonas
}