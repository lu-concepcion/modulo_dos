var lenguaje = "";
contador=0;
f=1;
do{
var programa = prompt("Ingrese un lenguaje");

if(programa =="Python"){
    if(parseInt(contador)<4){
        alert("No se puede ingresar ese lenguaje aun")}
}else{ 
    if(lenguaje == ""){
        lenguaje = programa;
        contador= contador + 1;
    }else{
    lenguaje = lenguaje +" - "+ programa;}
    contador= contador + 1;
    }
if(programa == "Python"){
    if(parseInt(contador)>4){
        alert(lenguaje +" - "+"Python")
        f=0;
    }
}
}while(f==1);
