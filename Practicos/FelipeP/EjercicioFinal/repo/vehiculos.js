//generar datos de vehículos

const getVehiculos = () => {
    let vehiculos = [
        {
            id: 1,
            marca: 'Ford',
            modelo: 'Mustang'
        },
        {
            id: 2,
            marca: 'Ford',
            modelo: 'Fiesta'
        },
        {
            id: 3,
            marca: 'Mazda',
            modelo: 'V8 Sport'
        },
    ];
    return vehiculos;
}

module.exports = {getVehiculos}
