
var vehMar = prompt ("Ingrese marca de vehiculo");
var vehMod = prompt ("Ingrese modelo de vehiculo");
var vehAn = prompt ("Ingrese año de vehiculo");
var vehCoN = prompt ("Ingrese nombre de color del vehiculo");
var vehCoD = prompt ("Ingrese codigo de color");




var vehiculo={

    marca:vehMar,
    modelo:vehMod,
    año:vehAn,
    color:{
        nombreCol:vehCoN,
        codCo:vehCoD
    },
        
};


vehiculo.marca
vehiculo.modelo
vehiculo.año
vehiculo.color.nombreCol
vehiculo.color.codCo

document.write(vehiculo.marca+", ", vehiculo.modelo+", ", vehiculo.año+", ", vehiculo.color.nombreCol+", ", vehiculo.color.codCo)