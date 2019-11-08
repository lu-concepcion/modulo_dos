var vehiculo = {
    marca: "",
    modelo: "",
    anio: 0,
    color : {
        codigo: "",
        nombre: ""
    }
};

do{ //Marca
    vehiculo.marca = prompt("Ingrese su marca");
}while(parseInt(vehiculo.marca));

do{ //Modelo
    vehiculo.modelo = prompt("Ingrese su modelo");
}while(parseInt(vehiculo.modelo));

do{ //Anio
    vehiculo.anio = prompt("Ingrese su año");
}while(!parseInt(vehiculo.anio) || vehiculo.anio.length != 4);

do{ //Color (HTML)
    vehiculo.color.codigo = prompt("Ingrese el código del color HTML (sin #)");
}while(parseInt(vehiculo.color.codigo.length != 6));

do{ //Nombre color
    vehiculo.color.nombre = prompt("Ingrese el nombre del color ingresado");
}while(parseInt(vehiculo.color.nombre));

do{ //Información
    var informacion = prompt("Desea ver su información? (Si/No)");
}while(informacion != "Si" && informacion != "No");

if(informacion == "Si"){
    var mensaje =   "Marca: " + vehiculo.marca +
                "<br> Modelo: " + vehiculo.modelo +
                "<br> Año: " + vehiculo.anio +
                "<br> Color (HTML): #" + vehiculo.color.codigo + " (" + vehiculo.color.nombre + ")";

    document.write(mensaje);
}
