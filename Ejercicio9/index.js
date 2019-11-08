var auto = Object()
var flag = 1
do
{
    auto.marca=prompt("ingrese marca")
} while(parseInt(auto.marca))
do
{
    auto.modelo=prompt("ingrese modelo")
} while(parseInt(auto.modelo))
do
{
    auto.año=prompt("ingrese año")
} while(isNaN(auto.año))
do
{
    auto.color=prompt("ingrese color")
} while(parseInt(auto.color))
do
{
    auto.colorHEX=prompt("ingrese color (HEX)")
} while(isNaN(auto.colorHEX))
do{
    info= prompt("¿que informacion desea ver?")
    switch(info)
    {
        case "marca":
        alert(auto.marca)
        flag = 0;
        break
        case "modelo":
        alert(auto.modelo)
        flag = 0;
        break
        case "año":
        alert (auto.año) 
        flag = 0;
        break 
        case "color":
        alert (auto.color.nombre)
        flag = 0;
        break
        default:
        alert ("expresion invalida, intente nuevamente")
    
    
    }
    }while(flag)