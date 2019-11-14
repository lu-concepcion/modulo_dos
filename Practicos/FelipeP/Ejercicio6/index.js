let numeroPar = 0;
let operacion = "";
let sumar = 0;
let multiplicar = 1;

for (let i = 0; i < 5; i++) {
    numeroPar = parseInt(prompt('Ingresa un número par por favor (entre 2 y 20) N°: ' + (i+1)));
    if (numeroPar%2 != 0 || numeroPar === "") {
        alert('Error: Has ingresado número impar o texto vácio')
        i--;
        continue;
    } else {
        if (numeroPar < 2 || numeroPar > 20) {
            alert('Error: Solo puedes ingresar números entre 2 y 20');
            i--;
            continue;
        } else {
            sumar += numeroPar;
            multiplicar = numeroPar * multiplicar;
        }
    }
}

operacion = prompt('Por favor ingrese operación (Sumar, Multiplicar');

if (operacion === 'Sumar') {
    alert('Suma total: ' + sumar);
} else if (operacion === 'Multiplicar')
{
    alert('Multiplicación total: ' + multiplicar);
}



