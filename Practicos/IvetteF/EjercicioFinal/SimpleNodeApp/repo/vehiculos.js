//generar datos de vehículos

var funciones = require('../funciones')

const vehiculos = () =>
{
    const listaVehiculos = 
    [
        {
            id: "0",
            marca: "kia",
            modelo:"rio"
        },
        {
            id: "1",
            marca: "kia",
            modelo:"rio"
        },
        {
            id: "2",
            marca: "kia",
            modelo:"rio"
        },
        {
            id: "3",
            marca: "kia",
            modelo:"rio"
        }
    ]
    return listaVehiculos
}

module.exports = 
{
    vehiculos
}
