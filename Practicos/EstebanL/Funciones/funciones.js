
const texto = (textoIngresado) => {

    if(isNaN(textoIngresado) == true){

        alert ("Es un Texto")
        return (true)

    }else{
        alert ("Es un Numero")
       return (false)

    }
}
const mayuscula = (textoIngresado) => {

    return textoIngresado.toUpperCase()

}
const minuscula = (textoIngresado) => {

    return textoIngresado.toLowerCase()

}
const suma = (n1, n2) => {

    const resultado = parseInt(n1) + parseInt(n2)
    return resultado

}
const resta = (n1, n2) => {

    const resultado = parseInt(n1) - parseInt(n2)
    return resultado

}
const division = (n1, n2) => {

    const resultado = parseInt(n1) / parseInt(n2)
    return resultado

}
const multiplicacion = (n1, n2) => {

    const resultado = parseInt(n1) * parseInt(n2)
    return resultado

}
const porcentaje = (n1, n2) => {

    const resultado2 = (parseInt(n2) * 100) / parseInt(n1)
    return alert (resultado2)

}
const contarVocales = (textoingresado) => {
let vocales = 0;

    for(let i=0; i < textoingresado.length;i++){

        if(textoingresado.charAt(i)=="a" || textoingresado.charAt(i)=="e" ||textoingresado.charAt(i)=="i" ||textoingresado.charAt(i)=="o" ||textoingresado.charAt(i)=="u"){
            
            vocales++
        }

    }

    return vocales

}
const palindromo = (textoingresado) =>{

    let textocomparacion=textoingresado.split("");
    let textopalindromo=textoingresado.split("").reverse();

    for (let i=0;i<textocomparacion.length;i++){

        if(textocomparacion[i]==textopalindromo[i]){
    
            alert("Esto es un palíndromo")
            return (true);

        }else{

            alert("Esto no es un palíndromo")
            return(false);
        }
    }
}
// Ejercicio de Felipe Pulgar
const obtenerEdadPersona = (arreglo, edadLimite) => {

    let personas = [];

    let fecha = '';

    let edad = 0;

    const hoy = new Date();



    arreglo.forEach(element => {

        fecha = element['fechaNacimiento'];

        if ((hoy.getMonth()+1) >= fecha.getMonth() && hoy.getDate() >= fecha.getDate()) {

            edad = hoy.getFullYear() - fecha.getFullYear();

        } else {

            edad = (hoy.getFullYear()-1) - fecha.getFullYear();

        }

    });

    return alert(edad);

}
export {

    texto,
    mayuscula,
    minuscula,
    suma,
    resta,
    multiplicacion,
    division,
    porcentaje,
    contarVocales,
    palindromo,
    obtenerEdadPersona

}