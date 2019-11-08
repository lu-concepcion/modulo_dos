var auto = new Object();

auto.marca = prompt("Ingrese la marca de su automóvil");

while(!isNaN(auto.marca))
{
    auto.marca = prompt("Error, ingrese nuevamente");
}

auto.modelo = prompt("Ingrese el modelo de su automóvil");

while(!isNaN(auto.modelo))
{
    auto.modelo = prompt("Error, ingrese nuevamente");
}

auto.año = prompt("Ingrese el año de su automóvil");

while(isNaN(auto.año))
{
    auto.marca = prompt("Error, ingrese nuevamente");
}

auto.color = prompt("Ingrese el color de su automóvil");

while(!isNaN(auto.color))
{
    auto.color = prompt("Error, ingrese nuevamente");
}