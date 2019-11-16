//generar datos de profesiones
var funciones = require('../funciones')

const profesiones = () =>
{
    const listaProfesiones = 
    [
        {
            id: "0",
            nombre: "Ingeniero"
        },
        {
            id: "1",
            nombre: "Médico"
        },
        {
            id: "2",
            nombre: "Enfermera"
        },
        {
            id: "3",
            nombre: "Abogado"
        },
        {
            id: "4",
            nombre: "Chofer"
        },
        {
            id: "5",
            nombre: "Auxiliar"
        }
        
    ]
    return listaProfesiones
}

module.exports = 
{
    profesiones
}
