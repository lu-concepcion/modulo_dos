// Escribir un algoritmo que reciba dos números y calcule el porcentaje del segundo con respecto al primero, ej:
// Primer número: 90
// Segundo número: 40
// Resultado: 36%

// Utilizar Funciones

import { calculaPorcentaje } from '../funciones.js'
let numero1 = prompt ("Ingrese el primer numero")
let numero2 = prompt ("Ingrese el segundo numero")
alert("Resultado: "+ calculaPorcentaje(numero1,numero2)+"%")