var contador = 1;
var persona = {
    nombre: "",
    edad: ""
}
var regNombre = "";
var regEdad = 0;
aux = 0;

do{
    persona.nombre = prompt("Ingrese nombre para persona " + contador);
    if(persona.nombre == "Salir" || persona.nombre == "salir"){
        if(contador > 4){
            aux = 1;
            break;
        }
    }
    else{
        persona.edad = prompt("Ingrese edad para persona " + contador);
        if(persona.edad == "Salir" || persona.edad == "salir"){
            if(contador > 4){
                aux = 1;
                break;
            }
        }
        if(persona.edad > regEdad){
            regNombre = persona.nombre;
            regEdad = persona.edad;
        }
        contador ++;
    }
}while(aux = 1)

alert("La persona de mayor edad es " + regNombre + " con edad de: " + regEdad);