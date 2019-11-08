var auto = Object()
var flag = false
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
auto.color= Object()
do
{
    auto.color.nombre=prompt("ingrese color")
} while(parseInt(auto.color.nombre))
do
{
    auto.color.HEX=prompt("ingrese color (HEX)")
} while(parseInt(auto.color.HEX))
do{
    info= prompt("¿que informacion desea ver?")
    switch(info)
    {
        case "marca":
        alert(auto.marca)
        break
        case "modelo":
        alert(auto.modelo)
        break
        case "año":
        alert (auto.año) 
        break 
        case "color":
        alert (auto.color.nombre)
        case "color(HEX)":
        alert (auto.color.HEX)
        break
        default:
        alert ("expresion invalida, intente nuevamente")
        flag = true
    }
    }while(flag)