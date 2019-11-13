import{formato1} from './funciones.js'
/*let texto = "Hola;Hernan"
console.log(texto.split(";"))
// ["Hola","Hernan"]*/


if(isNaN(run)){
    let formato=prompt("Ingrese en que formato lo realizara formato1 puede ingresar ej 19.508.203-0 o formato2 ej 19508203");
    if(formato=="formato1"){
    let run=prompt("Ingrese un rut ej 19.508.203-0: ");
        alert(formato1(run));
}else{
    alert("no se puede validar")
}






