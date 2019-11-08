var auto = new Object();

auto.marca = prompt("Ingrese la marca de su automóvil");

while(!isNaN(auto.marca))
{
    auto.marca = prompt("Error, ingrese la marca nuevamente");
}

auto.modelo = prompt("Ingrese el modelo de su automóvil");

while(!isNaN(auto.modelo))
{
    auto.modelo = prompt("Error, ingrese el modelo nuevamente");
}

auto.año = prompt("Ingrese el año de su automóvil");

while(isNaN(auto.año))
{
    auto.año = prompt("Error, ingrese el año nuevamente");
}

auto.color = new Object();
auto.color.codigo = prompt("Ingrese el codigo del color de su automóvil");

while(!isNaN(auto.color.codigo))
{
    auto.color = prompt("Error, ingrese el codigo del color nuevamente");
}

auto.color.paleta = prompt("Ingrese el nombre del color de su automóvil");

while(!isNaN(auto.color.paleta))
{
    auto.color = prompt("Error, ingrese el nombre del color nuevamente");
}
var colorTodo = auto.color.codigo + "-" + auto.color.paleta;
var Todo = "Marca:"+ auto.marca+"\n Modelo:"+ auto.modelo+"\n Año:"+ auto.año+"\n Código del color:"+ auto.color.codigo+"\n Nombre del color:"+ auto.color.paleta;
var opcion = prompt("Ingrese una de las siguientes opciones para mostrar en pantalla:\n 0: Marca\n 1: Modelo\n 2: Año\n 3: Código del color\n 4: Nombre del color\n 5: Código y nombre del color\n 6: Toda la información");

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
        
    case "6":
        alert(Todo)
        break;
}