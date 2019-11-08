
var f=[0,1];
var error="false";

do
{
    var numero = parseInt(prompt("ingresa un numero"));
     error="false";

    if(numero<3 || numero>15)
    {
       alert("Fuera de rango!");
       error="true";

    }

}while(error=="true");


for(var i=2;i<numero;i++){
    
    f[i]=f[i-1]+f[i-2];

   
   
}
document.write(f);

