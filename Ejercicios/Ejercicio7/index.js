variable_n1 = 0;
variable_n2 = 1;
variable_n3 = 0;
fibonacci = 0;
do {
    var limite_de_secuencia = prompt("¿Hasta que numero se hará la secuencia?");
} while (limite_de_secuencia > 15 || limite_de_secuencia < 3);
fibonacci = "0, 1"
for (i = 2; i < limite_de_secuencia; i++) {
    variable_n3 = parseInt(variable_n1) + parseInt(variable_n2);
    variable_n1 = variable_n2;
    variable_n2 = variable_n3;
    fibonacci = fibonacci + ", " + variable_n3;

}
document.write(fibonacci)