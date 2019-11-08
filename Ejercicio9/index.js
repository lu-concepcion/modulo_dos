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
auto.color = new Object();
auto.color.codigo = prompt("Ingrese el codigo del color de su automóvil");

while(!isNaN(auto.color.codigo))
{
    auto.color = prompt("Error, ingrese nuevamente");
}

auto.color.paleta = prompt("Ingrese el nombre del color de su automóvil");

while(!isNaN(auto.color.paleta))
{
    auto.color = prompt("Error, ingrese nuevamente");
}
var colorTodo = auto.color.codigo + "-" + auto.color.paleta;
var opcion = prompt("Ingrese una de las siguientes opciones para mostrar en pantalla:\n 0:marca\n 1:modelo\n 2:año\n 3:código del color\n 4:nombre del color\n 5:código y nombre del color");

switch (opcion)
{
    case "0":
        alert(auto.marca)
        break;
    
    case "1":
        alert(auto.modelo)
        break;
        
    case "2":
        alert(auto.año)
        break;
        
    case "3":
        alert(auto.color.codigo)
        break;
        
    case "4":
        alert(auto.color.paleta)
        break;
                
    case "5":
        alert(colorTodo)
        break;
}