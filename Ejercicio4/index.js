var cont = 0
var lp2 = ""
do
{
    var lp1 = prompt("introduzca un lp")
    if(lp1!="Phython")
        {
            lp2 = lp2+lp1
            cont++
        }
    
}while ((cont<4)&&(lp1!="Phython"))
alert(lp2)