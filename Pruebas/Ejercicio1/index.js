import{validaNumero,validaTexto,aMayusculas,aMinusculas} from './funciones.js'

let contenedor = prompt("Ingresale un String");
alert("Es numero? " + validaNumero(contenedor) + " Es texto? " + validaTexto(contenedor) + " A minusculas : " + aMinusculas(contenedor) + " A mayusculas " + aMayusculas(contenedor)  )