var mensaje = ""
//Ejercicio 4
var contador=0
do{
    var lenguaje_program = prompt("Introduce lenguaje de programacion");
    contador++;
    if(lenguaje_program == "Python" && contador>4){
        mensaje = mensaje + "-" + lenguaje_program
    }else{if(lenguaje_program == "Python" && contador <4)
    {mensaje = mensaje}
    else{mensaje = mensaje + "-"+ lenguaje_program}}
}while(contador<4 || lenguaje_program !="Python")   
alert(mensaje)


//while(contador<4 || lp!="Python")
//{
//    var lp = prompt("Introduce lenguaje de programacion");
//    if(contador < 4 && lp=="Python")
//    {
        
//    }
//}