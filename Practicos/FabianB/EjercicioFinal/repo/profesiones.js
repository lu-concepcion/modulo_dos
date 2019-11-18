//generar datos de profesiones

const getProfesiones = () => {
    let profesiones = [
        {
            id: 1,
            nombre: 'Ingeniero'
        },
        {
            id: 2,
            nombre: 'Medico'
        },
        {
            id: 3,
            nombre: 'Diseñador Grafico'
        }
    ];
    return profesiones;
}

module.exports = {getProfesiones}
