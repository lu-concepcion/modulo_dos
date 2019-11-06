let lenguajes;
let cont = 0;
let ingresePhyton = false;
let python = 0;
while(true){
    input = prompt('Ingrese un lenguaje de programación');
    if (input == 'Python') {
        ingresePhyton = true;
        python++;
    }
    if (ingresePhyton == true && cont >= 4) {
        if (python > 0) {
            break;
        }
        if (cont == 0) {
            lenguajes = '-' + input;
        } else {
            lenguajes += input + '-';
        }
        break;
    } else {
        if (cont == 0) {
            lenguajes = '-' + input;
        } else {
            lenguajes += input + '-';
        }
    }
    cont++;
}

alert(lenguajes);