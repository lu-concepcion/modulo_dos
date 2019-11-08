count = 0;

do{
    var vehMar = prompt ("Ingrese marca de vehiculo");
    
    if (vehMar === ""){
    
        alert ("Debe de ingresar datos")
    
    }else{
        if(isNaN(parseInt(vehMar)) == true){

            count++
    
        }else{

        alert ("Debe ingresar solo texto");

        }
    }
    
}while(count < 1);
do{
        var vehMod = prompt ("Ingrese modelo de vehiculo");
        if (vehMod === ""){
    
            alert ("Debe de ingresar datos")
        
        }else{
            if(isNaN(parseInt(vehMod)) == true){
    
                count++
        
            }else{
    
            alert ("Debe ingresar solo texto");
    
            }
        }
}while(count < 2);
do{
    var vehAn = prompt ("Ingrese año del vehiculo");
    if (vehAn === ""){

        alert ("Debe de ingresar datos")
    
    }else{
        if(isNaN(parseInt(vehAn)) == false){

            count++
    
        }else{

        alert ("Debe ingresar solo numeros");

        }
    }
}while(count < 3);
do{
        var vehCoN = prompt ("Ingrese nombre de color del vehiculo");
        if (vehCoN === ""){
    
            alert ("Debe de ingresar datos")
        
        }else{
            if(isNaN(parseInt(vehCoN)) == true){
    
                count++
        
            }else{
    
            alert ("Debe ingresar solo texto");
    
            }
        }
}while(count < 4);
do{  

    var vehCoD = prompt ("Ingrese codigo de color");

    if (vehCoD === ""){

        alert ("Debe de ingresar datos");

    }else{
        
        count++

    }

}while(count < 5); 

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