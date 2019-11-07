flag=1;
edad = 0;
nombre = "";
contador = 0;

do{

var guardar_edad = prompt("Ingresa una edad "+contador);
//VERIFICA SI SE INGRESA SALIR, SI ES ASI VERIFICA SI EL CONTADOR ES 4 TAMBIEN
if(guardar_edad=="Salir"||guardar_edad=="salir"&&parseInt(contador)>=4){
    flag= 0;
    alert(nombre +" es el mayor con "+edad +" años");
}else{
    //SE SUMA EL CONTADOR Y LUEGO PIDE EL NOMBRE
    contador++;
    var guardar_nombre = prompt("Ingresa el nombre completo");
//VERIFICA SI SE INGRESA SALIR, SI ES ASI VERIFICA SI EL CONTADOR ES 4 TAMBIEN
}if(guardar_nombre=="Salir"||guardar_nombre=="salir"&&parseInt(contador)>=4){
    flag= 0;
    alert(nombre +" es el mayor con "+edad +" años")
}else{
    //SE VERIFICA SI ES MAYOR QUE EL ANTERIOR GUARDADO
    if(parseInt(guardar_edad)>edad){ 
        //SE GUARDAN LOS NOMBRES Y EDADES EN LAS VARIBLES AUXILIARES DEL NOMBRE Y LA EDAD  
    edad = guardar_edad;
    nombre = guardar_nombre;
    }
}
}while(flag==1);