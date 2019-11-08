let Vehiculo = new Object();
Vehiculo.Color = new Object();

do {
    var paso = false;
    var marca = prompt("Cual es la marca del vehiculo:");
    if (marca !== "" && isNaN(marca)) {
        var paso = true;
        Vehiculo.Marca = marca;
    }
    else {
        alert("Ingresa la marca del vehiculo correctamente:");
    }
}while(!paso);

do {
    var paso = false;
    var modelo = prompt("Ingresa el modelo del vehiculo:");
    if (modelo !== "" && isNaN(modelo)) {
        var paso = true;
        Vehiculo.Modelo = modelo;
    }
    else {
        alert("Ingresa el modelo del vehiculo correctamente");
    }
}while(!paso);

do {
    var paso = false;
    var year = prompt("Ingresa el año del vehiculo:");
    if (year !== "" && year !== 0 && !isNaN(year)) {
        var paso = true;
        Vehiculo.Year = year;
    }
    else {
        alert("Ingresa el año del vehiculo correctamente");
    }
}while(!paso);

do {
    var paso = false;
    var colorNombre = prompt("Ingresa el nombre del color del vehiculo:");
    if(colorNombre !== "" && isNaN(colorNombre)) {
        var paso = true;
        Vehiculo.Color.Nombre = colorNombre;
    }
    else {
        alert("Ingresa el nombre del color correctamente!");
    }
}while(!paso);

do {
    var paso = false;
    var colorHtml = prompt("Ingresa el color del vehiculo en código Html:");
    if (colorHtml !== "" && colorHtml.length <= 7 && colorHtml.length >= 4 && colorHtml.indexOf("#") !== -1) {
        var paso = true;
        Vehiculo.Color.Html = colorHtml;
    }
    else {
        alert("Ingresa el color del vehiculo correctamente!");
    }
}while(!paso);
 
alert("Tú vehiculo tiene los siguientes datos: \nMarca: " + Vehiculo["Marca"] +
"\nModelo: " + Vehiculo["Modelo"] + "\nAño: " + Vehiculo["Year"] + "\nColor: " + Vehiculo["Color"]["Nombre"] +
" - " + Vehiculo["Color"]["Html"]);