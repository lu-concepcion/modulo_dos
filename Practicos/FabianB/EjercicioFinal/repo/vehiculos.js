//generar datos de vehículos

const getVehiculos = () => {
    let vehiculos = [
        {
            id: 1,
            marca: 'Chevrolet',
            modelo: 'Spark'
        },
        {
            id: 2,
            marca: 'Ford',
            modelo: 'Explorer'
        },
        {
            id: 3,
            marca: 'Toyota',
            modelo: 'Yaris'
        },
    ];
    return vehiculos;
}

module.exports = {getVehiculos}
