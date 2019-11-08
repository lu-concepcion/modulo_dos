var auto = Object()
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