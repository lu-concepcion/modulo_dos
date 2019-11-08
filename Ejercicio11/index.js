var datos_persona = {
    edades : [],
    nombres : [],
    mayor: {
        nombre: "",
        edad: 0
    }
};

flag=1;
bucle_infinito=1;
contador=0;
auxiliar=0;

do{
    for(i=0;i<bucle_infinito;i++){
        do{
            var solicitar_edad = prompt("Ingrese la edad de la persona");
            if(solicitar_edad=="Salir"||solicitar_edad=="salir"){
                if(contador>=4){
                    auxiliar=i;
                    bucle_infinito=i;
                    flag=0;
                    break;
                }
            }
        }while(Number.isNaN(parseInt(solicitar_edad)));
        datos_persona.edades[i] = solicitar_edad;

        do{
            var solicitar_nombre = prompt("Ingrese el nombre de esa persona");
            if(solicitar_nombre=="Salir"||solicitar_nombre=="salir"){
                if(contador>=4){
                    auxiliar=i;
                    bucle_infinito=i;
                    flag=0
                    break;
                }
            }
        }while(Number.isNaN(parseInt(solicitar_nombre))==false);
        datos_persona.nombres[i] = solicitar_nombre;
        contador++;
        bucle_infinito++;
    }
}while(flag==1);

