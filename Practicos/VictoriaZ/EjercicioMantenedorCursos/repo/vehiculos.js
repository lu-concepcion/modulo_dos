//generar datos de vehículos
//var funciones = require('../funciones')
const listaVehiculos = ()=>{
    let listadoVehiculos=[
        {
        id:1,
        marca:"KIA",
        modelo:"Sorento"
        },
        {
        id:2,
        marca:"Nissan",
        modelo:"X-trail"
        },
        {
        id:3,
        marca:"Toyota",
        modelo:"Yaris"
        },
        {
        id:4,
        marca:"Ford",
        modelo:"Mustang"
        }
    ]
    return listadoVehiculos

}


module.exports={
    listaVehiculos
}