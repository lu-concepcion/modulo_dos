//generar datos de vehículos
const devuelveAutos=()=>{
    let autos=[];
    autos[0]= {idVehiculo:1,marca:"Ford",modelo:"Mustang"};
    autos[1]= {idVehiculo:2,marca:"Chevrolet",modelo:"Camaro"};
    autos[2]= {idVehiculo:3,marca:"Toyota",modelo:"Supra"};
    autos[3]= {idVehiculo:4,marca:"Suzuki",modelo:"Samurai"};
    autos[4]= {idVehiculo:5,marca:"BMW",modelo:"m4"};
    return autos
}

module.exports ={
    devuelveAutos
}