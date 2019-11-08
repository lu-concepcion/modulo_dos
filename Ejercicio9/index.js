marca = "";
modelo = "";
año = "";
color = "";
var vehiculo = new Object();

do{
   var año = prompt ("Ingrese al año del vehiculo");
}while(Number.isNaN(parseInt(año)));
vehiculo.año = año;

do{
    var marca = prompt("Ingrese la marca del vehiculo");
}while(Number.isNaN(parseInt(marca))==false);
vehiculo.marca = marca;

do{
    var modelo = prompt("Ingrese el modelo del auto");
}while(Number.isNaN(parseInt(modelo))==false);
vehiculo.modelo = modelo;

var color = prompt("Ingrese el color del auto:");
vehiculo.color = color;

var elegir_opcion("¿Que desea ver? \n1.- Año \n2.- Marca \n3.- Modelo \n4.- Color \n5.- Todo")
if(elegir_opcion==1){
    alert(vehiculo.año)
}else{
    if(elegir_opcion==2){
        alert(vehiculo.marca)
    }else{
        if(elegir_opcion==3){
            alert(vehiculo.modelo)
        }else{
            if(elegir_opcion==4){
                alert(vehiculo.color)
            }else{
                alert("Año: "+vehiculo.año+"\nMarca: "+vehiculo.año+"\nModelo: "+vehiculo.modelo+"\nColor: "+vehiculo.color)
            }
        }
    }
}