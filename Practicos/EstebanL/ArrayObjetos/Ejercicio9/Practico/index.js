count = 0;

do{
    var vehMarca = prompt ("Ingrese marca de vehiculo");
    
    if (vehMarca === ""){
    
        alert ("Debe de ingresar datos")
    
    }else{
        if(isNaN(parseInt(vehMarca)) == true){

            count++
    
        }else{

        alert ("Debe ingresar solo texto");

        }
    }
    
}while(count < 1);
do{
        var vehModelo = prompt ("Ingrese modelo de vehiculo");
        if (vehModelo === ""){
    
            alert ("Debe de ingresar datos")
        
        }else{
            if(isNaN(parseInt(vehModelo)) == true){
    
                count++
        
            }else{
    
            alert ("Debe ingresar solo texto");
    
            }
        }
}while(count < 2);
do{
    var vehAno = prompt ("Ingrese año del vehiculo");
    if (vehAno === ""){

        alert ("Debe de ingresar datos")
    
    }else{
        if(isNaN(parseInt(vehAno)) == false){

            count++
    
        }else{

        alert ("Debe ingresar solo numeros");

        }
    }
}while(count < 3);
do{
        var vehCoNombre = prompt ("Ingrese nombre de color del vehiculo");
        if (vehCoNombre === ""){
    
            alert ("Debe de ingresar datos")
        
        }else{
            if(isNaN(parseInt(vehCoNombre)) == true){
    
                count++
        
            }else{
    
            alert ("Debe ingresar solo texto");
    
            }
        }
}while(count < 4);
do{  

    var vehCoDigo = prompt ("Ingrese codigo de color");

    if (vehCoDigo === ""){

        alert ("Debe de ingresar datos");

    }else{
        
        count++

    }

}while(count < 5); 

var vehiculo={

    marca:vehMarca,
    modelo:vehModelo,
    año:vehAno,
    color:{
        nombreColor:vehCoNombre,
        codColor:vehCoDigo
    },
        
};


var { marca, modelo, año, color } = vehiculo;
alert(`${marca} ${modelo} ${año} ${color.nombreColor} ${color.codColor}`); 

