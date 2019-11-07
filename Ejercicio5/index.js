flag=1;
edad = 0;
nombre = "";
contador = 0;
do{
    
var guardar_edad = prompt("Ingresa una edad "+contador);
if(guardar_edad=="Salir"||guardar_edad=="salir"&&parseInt(contador)>=4){
    flag= 0;
    alert(nombre +" es el mayor con "+edad +" años");
}else{
    contador++;
    var guardar_nombre = prompt("Ingresa el nombre completo");
}if(guardar_nombre=="Salir"||guardar_nombre=="salir"&&parseInt(contador)>=4){
    flag= 0;
    alert(nombre +" es el mayor con "+edad +" años")
}else{
    if(parseInt(guardar_edad)>edad){   
    edad = guardar_edad;
    nombre = guardar_nombre;
    }
}
}while(flag==1);