//generar datos de profesiones

const getProfesiones = () => {
    let profesiones = [
        {
            id: 1,
            nombre: 'Ingeniero en Informática'
        },
        {
            id: 2,
            nombre: 'Ingeniero Comercial'
        },
        {
            id: 3,
            nombre: 'Analista Programador'
        }
    ];
    return profesiones;
}

module.exports = {getProfesiones}
