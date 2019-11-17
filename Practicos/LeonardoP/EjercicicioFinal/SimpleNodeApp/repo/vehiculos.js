//generar datos de vehículos

const retornaVehiculos=()=>{

    let listadoVehiculos=[
        {
            id: 1,
            marca: "toyota",
            modelo: "yaris"
        },
        {
            id: 2,
            marca: "nissan",
            modelo: "v16"
        },
        {
            id: 3,
            marca: "ferrari",
            modelo: "f50"
        }
    ];

    return listadoVehiculos;
}

module.exports={

    retornaVehiculos
}