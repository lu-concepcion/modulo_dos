//generar datos de vehículos
// let vehiculos={};
const listaVehiculos=()=>{
    let arrayVehiculos=[
        {idVehiculo:"1",marca:"ford",modelo:"xt"},
        {idVehiculo:"2",marca:"nissan",modelo:"xtr"},
        {idVehiculo:"3",marca:"chevrolet",modelo:"corvet"},
        {idVehiculo:"4",marca:"Ferrari",modelo:"Gt"},
        {idVehiculo:"5",marca:"Mercedez",modelo:"FF3"}
    ];
    return arrayVehiculos;    
}

module.exports={
    listaVehiculos
}