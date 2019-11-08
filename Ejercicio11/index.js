contador = 0;
var persona = {
    nombre: "",
    edad: 0,
    mayor: {
        edad: "",
        nombre: 0
    }
};

flag=1
do{
    var edad = prompt("Ingrese la edad de la persona");
    if(edad.toLowerCase()=="salir"&&contador>=4){
        alert("La persona con mayor edad es: "+persona.mayor.nombre)
        flag=0;
    }else{
        if(!isNaN(edad)){
            persona.edad = edad;
            var nombre = prompt("Ingrese el nombre de esa persona");
            if(nombre=="Salir"||nombre=="salir"&&contador>=4){
                alert("La persona con mayor edad es: "+persona.mayor.nombre)
                flag=0;
            }else{
                persona.nombre= nombre
                contador++;
                if(isNaN(nombre)==false){
                    if(persona.edad>edad){
                        edad= persona.edad;
                        persona.mayor.nombre = persona.nombre;
                    }
                }
            }
        }
    }
}while(flag==1)