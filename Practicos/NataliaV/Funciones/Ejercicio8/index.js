import{numeroaBuscar} from './funciones.js'
let numero =[1,2,3,4,5,6,7,8,9,10];
let n =parseInt(prompt("Ingrese un numero: "))
let p;
while(p=="s"){
if(!numeroaBuscar(numero,n)){
    alert("no se encuentra "+n)
    p=prompt("quiere ingresar otra vez s/n")
    break;
}}