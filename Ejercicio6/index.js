var num1, num2, num3, num4, num5;
var contador= 0;
var flag = 0;

do {
var ingresado = prompt("Ingrese un valor par")    
if (ingresado % 2 == 0 && ingresado >= 2 && ingresado <= 20) {
 contador= contador +1;

 if (contador == 1) {
    num1 = ingresado; 
 }

 if (contador == 2) {
    num2 = ingresado; 
 }

 if (contador == 3) {
    num3 = ingresado; 
 }

 if (contador == 4) {
    num4 = ingresado; 
 }

 if (contador == 5) {
    num5 = ingresado; 
 }

}
else{    
alert("Porfavor ingrese solo numeros pares entre 2 y 20")
}

} while (contador< 5);

do {  

var respuesta = prompt("desea multiplicar o sumar?");

if (respuesta == "sumar") {
    var suma = (parseInt(num1)+ parseInt(num2)+ parseInt(num3)+ parseInt(num4)+ parseInt(num5));
 alert("La suma es " + suma)  
 flag = 1;  
}
else if(respuesta == "multiplicar"){
    var producto = (parseInt(num1)* parseInt(num2)* parseInt(num3)* parseInt(num4)* parseInt(num5));
   alert("La multiplicacion es " + producto )
flag = 1;
}

} while (flag == 0);