var vehiculo = new Object();

do{
    vehiculo.marca = prompt("Ingrese marca: ");
}while(isNaN(vehiculo.marca) == false)

do{
    vehiculo.modelo = prompt("Ingrese modelo: ");
}while(isNaN(vehiculo.modelo) == false)

do{
    vehiculo.año = prompt("Ingrese año: ");
}while(isNaN(parseInt(vehiculo.año)))

vehiculo.color = {
    codigo: "",
    nombre: ""
};

do{
    vehiculo.color.codigo = prompt("Ingrese el codigo del color: ");
}while(isNaN(vehiculo.color.codigo) == false)

do{
    vehiculo.color.nombre = prompt("Ingrese el nombre del color: ");
}while(isNaN(vehiculo.color.nombre) == false)

do{
    var respuesta = prompt("Ingrese opcion: 1.Marca 2.Modelo 3.Año 4.Color 5.Todo");
    var rep = false;
    switch(respuesta){
        case "1":
            alert("Marca : " + vehiculo.marca);
            break;
        case "2":
            alert("Modelo : " + vehiculo.modelo);
            break;
        case "3":
            alert("Año : " + vehiculo.año);
            break;
        case "4":
            alert("Codigo color : " + vehiculo.color.codigo + ", nombre color : " + vehiculo.codigo.nombre);
            break;
        case "5":
            alert("Marca: " + vehiculo.marca + "| Modelo: " + vehiculo.modelo + "| Año: " + vehiculo.año
                    + "| Color = codigo: " + vehiculo.color.codigo + ", nombre: " + vehiculo.color.nombre);

        default:
            rep = true;
            alert("Ingrese opcion valida");
    }
    
}while(rep);

