//generar datos de vehículos

const listaVehiculos = () => {
    let arrayVehiculos = [
        {idV:"1", marca:"Hyundai", modelo:"Accent"},
        {idV:"2", marca:"Ford", modelo:"Fiesta"},
        {idV:"3", marca:"Toyota", modelo:"Yaris"},
        {idV:"4", marca:"Nissan", modelo:"Luke"},
        {idV:"5", marca:"Chevrolet", modelo:"Spark"},
        {idV:"6", marca:"Mercedes-Benz", modelo:"GLC-Coupé"},
    ];
    return arrayVehiculos;
}

module.exports={listaVehiculos}