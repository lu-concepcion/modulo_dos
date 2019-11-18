//generar datos de vehículos
//generar datos de vehículos

const getVehiculos = () => {
    let vehiculos = [
        {
            id: 1,
            marca: 'Ford',
            modelo: 'Ka'
        },
        {
            id: 2,
            marca: 'Chevrolet',
            modelo: 'gt'
        },
        {
            id: 3,
            marca: 'Alfa Romeo',
            modelo: 'MiTo'
        },
    ];
    return vehiculos;
}

module.exports = {getVehiculos}