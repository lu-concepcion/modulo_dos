
var f=[0,1];

var numero = parseInt(prompt("Ingrese numero: "));


for(var i=2;i<numero;i++){
    
    f[i]=f[i-1]+f[i-2];

   
   
}
document.write(f);

