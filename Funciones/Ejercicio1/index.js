import{
    esNumero,
    esTexto,
    aMinuscula,
    aMayuscula
} from '../funciones.js';

let variable = prompt("Ingrese algo");

if(esNumero(variable)){
    alert("Es número");
}

if(esTexto(variable)){
    alert("Es texto");

    alert(  "A minúscula " + aMinuscula(variable) + "\n" +
            "A mayúscula " + aMayuscula(variable));
}