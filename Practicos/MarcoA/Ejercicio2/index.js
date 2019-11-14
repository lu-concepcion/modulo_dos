var genero = prompt("Eres Hombre o Mujer");
var edad = prompt("Ingresa tu edad");
if(genero=="Hombre"||genero=="hombre"){
    if(parseInt(edad)>65){
        alert("Usted puede recibir pensión, espero que tenga platita guardada porque parece que no es mucha.")
    } else{
        alert("A ver, usted no puede pedir pensión, vuelva aqui pronto, si es que puede..")
    }
}
if(genero=="Mujer"||genero=="mujer"){
    if(parseInt(edad)>60){
          alert("Usted puede recibir pensión, le alcanzará para la comida del gato con suerte si...")
    }else{
        alert("Usted no puede recibir pensión, le faltan  unos pocos años, ojalá ese gatito aguante..")
    }
}