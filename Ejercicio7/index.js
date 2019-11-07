variable_auxiliar = 1;
variable_suma= 0;
fibonacci = 0;
var limite_de_secuencia = prompt ("¿Hasta que numero se hará la secuencia?");
for(i=0;i<n;i++){
    variable_auxiliar= parseInt(variable_auxiliar) + parseInt(variable_suma);
    variable_suma=variable_auxiliar
    fibonacci = fibonacci +", "+ variable_auxiliar; 
}