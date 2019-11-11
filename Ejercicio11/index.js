nombre = "";
edad = 0;
contador = 0;
var persona = {
    mayor: {
        nombre: ""
    }
};

flag=1
do{
    var pedir_edad = prompt("Ingrese la edad de la persona");
    if(pedir_edad.toLowerCase()=="salir"&&contador>=4){
        alert("La persona con mayor edad es: "+persona.mayor.nombre)
        flag=0;
    }else{
        if(!isNaN(edad)){
            var nombre = prompt("Ingrese el nombre de esa persona");
            if(nombre.toLowerCase()=="salir"&&contador>=4){
                alert("La persona con mayor edad es: "+persona.mayor.nombre)
                flag=0;
            }else{
                contador++;
                if(isNaN(nombre)){
                    if(pedir_edad>edad){
                        edad = pedir_edad;
                        persona.mayor.nombre = nombre;
                    }
                }
            }
        }
    }
}while(flag==1)