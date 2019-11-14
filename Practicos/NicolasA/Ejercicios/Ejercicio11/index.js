var contador = 0;
var salir = false;

var persona = {
    nombre: "",
    edad: 0
};

do{
    nombre = prompt("Ingrese el nombre"); 

    if(nombre == "Salir" && contador >= 4){
        alert("El nombre de la edad mayor es " + persona.nombre);
        salir = true;
    }else{
        edad = prompt("Ingrese la edad");
        if(contador == 0){
            persona.nombre = nombre;
            persona.edad = edad;
        }else{
            if(parseInt(persona.edad) < parseInt(edad)){
                persona.edad = edad;
                persona.nombre = nombre;
            }
        }
        contador++;
    }
}while(salir == false);