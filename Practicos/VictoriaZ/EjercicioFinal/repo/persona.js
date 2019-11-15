//generar datos de personas

// obtener dv y edad


var funciones = require('../funciones')
var vehiculos=require('./vehiculos')
var profesiones=require('./profesiones')


let listadoPersonas=[];

const guardarPersona= body=>{
    const {run, fechaNac, tieneProfesion, tieneVehiculo, vehiculoId, profesionId}=body
    const dv=funciones.verificarRun(run)
    const edad=funciones.calcularEdad(fechaNac)
    let vehiculo={};
    let profe={};
    if (tieneVehiculo){
        let listadoVehiculos= vehiculos.listaVehiculos()
        let propiedadVeh="id"
        vehiculo= funciones.buscarEnArrayObjeto(listadoVehiculos,propiedadVeh,parseInt(vehiculoId))
        delete vehiculo.id
    }  
    if (tieneProfesion){
        const listadoProfesiones= profesiones.listaProfesiones()
        const propiedadPro="id"
        profe= funciones.buscarEnArrayObjeto(listadoProfesiones,propiedadPro,parseInt(profesionId))
    } 
    //const propiedadAFiltrar="id";
// const datosVehiculos= idBuscar =>{
//     const filtrado=funciones.buscarEnArrayObjeto(listadoVehiculos, propiedadAFiltrar,idBuscar)
//     return filtrado
// }


    //listadoPersonas.push({ id: Math.random(), listadoVehiculos:listadoVehiculos})
    listadoPersonas.push({ run: run, dv:dv, fechaNac: fechaNac, edad:edad, tieneProfesion: tieneProfesion, tieneVehiculo:tieneVehiculo, vehiculo:vehiculo, profesion:profe})
    
}


const obtenerPersonas = (run) => {
    let filtro=funciones.filtrarArray(listadoPersonas,"run", run)

    return filtro;
}







module.exports={
    guardarPersona, obtenerPersonas
}

