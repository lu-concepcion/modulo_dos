let lenguajes = "";
let contador = 0;

while(true){
    lenguajeEntrada = prompt('Ingresa lenguaje de programación ' + 'número: ' + (contador + 1));
    if (contador >= 4 && lenguajeEntrada == 'Python') {
        lenguajes += lenguajeEntrada;
        break;
    } else if (lenguajeEntrada == 'Python') {
        continue;
    } else {
        lenguajes += lenguajeEntrada + ' - ';
    }
    contador++;
}

alert(lenguajes);