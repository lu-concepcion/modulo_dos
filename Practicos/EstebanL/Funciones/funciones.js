const texto = (textoingresado) =>{

    if (isNaN(parseInt(textoingresado)) == false){
        return "Es un numero";
    }
    else{
        return "Es un texto"
    }

}
const mayuscula = (textoingresado) =>{

    return textoingresado.toUpperCase()
    
}

const minuscula = (textoingresado) =>{

    return textoingresado.toLowerCase()

}
const contarVocales = (textoingresado) =>{

    let vocalcontada=0;
    textoingresado = textoingresado.toLowerCase()

    for(let i=0; i < textoingresado.length;i++){
        if(textoingresado.charAt(i)=="a" || textoingresado.charAt(i)=="e" ||textoingresado.charAt(i)=="i" ||textoingresado.charAt(i)=="o" ||textoingresado.charAt(i)=="u"){
            vocalcontada++
        }
    }

    return vocalcontada

}
const palindromo = (textoingresado) =>{

    let textocomparacion=textoingresado.split("");
    let textopalindromo=textoingresado.split("").reverse();

    for (let i=0;i<textocomparacion.length;i++){

    if(textocomparacion[i]==textopalindromo[i]){
    alert("Esto es un palíndromo")
    return (true);
}
    else{
    alert("Esto no es un palíndromo")
    return(false);
}}
    }
const sumar = (n1, n2) =>{

    const resultado = parseInt(n1) + parseInt(n2); 
    return resultado

}
const restar = (n1, n2) =>{

    const resultado = parseInt(n1) - parseInt(n2);
    return resultado

}
const dividir = (n1, n2) =>{

    const resultado = parseInt(n1) / parseInt(n2);
    return resultado

}
const multiplicar = (n1, n2) =>{

    const resultado = parseInt(n1) * parseInt(n2);
    return resultado

}
const porcentaje = (n1, n2) =>{

    const resultado1 = (parseInt(n2) * 100)/parseInt(n1); 
    return alert(resultado1+"%")

}
const validarRut = (n1) =>{

    for(i=0; i<n1.length; i++){



        return 

    }

    
}

const sorteo = (x) =>{

    return alert (x)
       
}

const busquedaElemento = (elemento) =>{

    const valoresElemento = ['Lapiz','Cuaderno','Goma','Carpeta','Estuche']
    alert (valoresElemento[elemento])
    return (true);

}
const busquedaElemento2 = (objeto) =>{

    const valoresObjeto = [
    {
        id:1,
        value: 'Men in Black',
        categoria: 'Accion'
    },{
        id:2,
        value:'Jumanji',
        categoria: 'Aventura'
    },{
        id:3,
        value:'the Ring',
        categoria: 'Terror'
    },{
        id:4,
        value:'Friday 13',
        categoria: 'Terror'
    }
];
//for(let i=0; i<=elemento; i++){

    //if(valoresObjeto [i] == elemento){

        alert (valoresObjeto[objeto])
        
    //}else{

    //    alert ("Objeto no a sido encontrado")

   // }

//}

}
const numFactorial = (numero)=> {

    let num = 1;
    let i = 0;

    for(i=1; i<=numero; i++){

    
    num = num * i;

    }
    return alert(num)

}
const menorMayor = (cadenaNumeros) =>{
    valorA = cadenaNumeros;

    for(i=0; i<cadenaNumeros.length; i++){
        for(e=1; e<cadenaNumeros.legth; e++){

            if(valorA[i]<valorB[e]){



            }


        }


    }

return alert(valorA)

}
const mayorMenor = () =>{

    valorB = cadenaNumeros;
    for(i=0; i<cadenaNumeros.length; i++){
        for(e=1; e<cadenaNumeros.legth; e++){

            if(valorA[i]>valorB[e]){



            }


        }

    
}
}
const calculoNumeroVerificador = (rutSinGuion) =>{
    let rutInvertido = "";
    for(let i=rutSinGuion.length; i>=0; i--){ //Invierte rut
        rutInvertido+=rutSinGuion.charAt(i);
    }

    let resultado = 0;
    if(rutInvertido.length == 8){ //ej:19788788
        resultado = rutInvertido.charAt(0)*2;
        resultado += rutInvertido.charAt(1)*3;
        resultado += rutInvertido.charAt(2)*4;
        resultado += rutInvertido.charAt(3)*5;
        resultado += rutInvertido.charAt(4)*6;
        resultado += rutInvertido.charAt(5)*7;
        resultado += rutInvertido.charAt(6)*2;
        resultado += rutInvertido.charAt(7)*3;
    }else{ // == 7 ej:1788788
        resultado = rutInvertido.charAt(0)*2;
        resultado += rutInvertido.charAt(1)*3;
        resultado += rutInvertido.charAt(2)*4;
        resultado += rutInvertido.charAt(3)*5;
        resultado += rutInvertido.charAt(4)*6;
        resultado += rutInvertido.charAt(5)*7;
        resultado += rutInvertido.charAt(6)*2;
    }

    const moduloRutInvertido = parseInt(resultado/11);
    const moduloMultiplicado = moduloRutInvertido*11;
    const valorAbsoluto = resultado - moduloMultiplicado;
    let digitoVerificador = 11-valorAbsoluto;
    
    if(digitoVerificador == 11){
        digitoVerificador = 0;
    }
    if(digitoVerificador == 10){
        digitoVerificador = "K";
    }
    
    return digitoVerificador;
}
const numeroVerificador = () =>{
    let rut = "";
    let salir = false;
    let caracteresPermitidos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-"];

    do{ //Comprueba que el rut ingresado no tenga caracteres distintos a los del array
        rut = prompt("Ingrese su rut");
        for(let i=0; i<rut.length; i++){
            salir = false;

            for(let j=0; j<caracteresPermitidos.length; j++){
                if(rut.charAt(i) == caracteresPermitidos[j]){ //Encontró que existe dentro y sale
                    salir = true;
                    break;
                }
            }
            if(salir == false){ //Si sale del for y no encontró que existe ese caracter, pide rut nuevamente
                break;
            }
        }

        if(salir == true){
            salir = false;
            let arrayRut = rut.split(".");

            if(esNumero(rut)){
                if(rut.length == 9){
                    return calculoNumeroVerificador(rut.slice(0,8));
                }else{
                    if(rut.length == 8){
                        return calculoNumeroVerificador(rut.slice(0,7));
                    }else{
                        salir = false;
                    }
                }
            }else{
                if(arrayRut.length == 3){ //[19][199][199-4]
                    if( (arrayRut[0].length == 1 || arrayRut[0].length == 2) && esNumero(arrayRut[0]) ){ //[19]
                        if(arrayRut[1].length == 3 && esNumero(arrayRut[1])){ // [199]
                            if((arrayRut[2].length == 4 || arrayRut[2].length == 5) && !esNumero(arrayRut[2])){ //[199-4]
                                
                                let arrayRutGuion = arrayRut[2].split("-"); //[199][4]
                                if(arrayRutGuion[0].length == 3){ //[199]
                                    if(arrayRutGuion[1].length == 1){ //[199]
                                        
                                        //Rut correcto, comienza la lógica
                                        salir = true;
                                        const rutSinGuion = arrayRut[0] + arrayRut [1] + arrayRutGuion[0];
                    
                                        return calculoNumeroVerificador(rutSinGuion);
                                    }
                                }
                            }else{
                                salir = false;
                            }
                        }else{
                            salir = false;
                        }
                    }else{
                        salir = false;
                    }
                }else{//Más puntos de los que debería o no tiene puntos
                    salir = false;
                }
            }

            if(salir == false){
                alert("Ingrese nuevamente el rut");
            }
        }else{
            if(salir == false){
                alert("Ingrese nuevamente el rut");
            }
        }

    }while(salir != true);
}
const encontrarElementoEnArray = (array, elemento)=>{
    for(let i=0; i<array.length; i++){
        if(array[i] == elemento){
            return true;
        }
    }

    return false;
}

const encontrarObjetoEnArray = (array, propiedad, valor) =>{
    //Comprueba de que todos los elementos del array son objetos
    let objeto = {};
    for(let i=0; i<array.length; i++){
        if(typeof array[i] != 'object'){
            alert("Su array no es de objetos");
            return objeto;
        }
    }

    if(array.length > 0){ //Que no esté vacío
        if(typeof array[0][propiedad] != 'undefined'){ //Si existe la propiedad
            for(let i=0; i<array.length; i++){
                if(array[i][propiedad] == valor){
                    return array[i];
                }
            }
        }else{
            alert("No existe esa propiedad en el array");
        }
    }else{
        alert("Tamaño array igual a 0");
    }
    return objeto;
}

const filtrarObjetosArray = (array, propiedad, valor) =>{
    var arrayFiltrado = [];
    //Comprueba de que todos los elementos del array son objetos
    for(let i=0; i<array.length; i++){
        if(typeof array[i] != 'object'){
            alert("Su array no es de objetos");
            return arrayFiltrado;
        }
    }

    if(array.length > 0){ //Que no esté vacío
        if(typeof array[0][propiedad] != 'undefined'){ //Si existe la propiedad
            for(let i=0; i<array.length; i++){
                if(array[i][propiedad] == valor){ //Si lo encuentra, lo añade
                    arrayFiltrado.push(array[i]);
                }
            }
        }else{
            alert("No existe esa propiedad en el array");
        }
    }else{
        alert("Tamaño array igual a 0");
    }
    return arrayFiltrado;
}

const imprimirArray = (array) =>{
    let mensaje = "";
    for(let i=0; i<array.length; i++){
        mensaje += array[i] + " ";
    }

    return mensaje;
}
export {

    contarVocales,
    texto,
    mayuscula,
    minuscula,
    sumar,
    restar,
    dividir,
    multiplicar,
    porcentaje,
    validarRut,
    palindromo,
    sorteo,
    busquedaElemento,
    busquedaElemento2,
    numFactorial,
    menorMayor,
    mayorMenor,
    calculoNumeroVerificador,
    numeroVerificador,
    encontrarElementoEnArray,
    encontrarObjetoEnArray,
    filtrarObjetosArray,
    imprimirArray
}

