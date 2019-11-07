variable_auxiliar = 1;
variable_suma= 0;
fibonacci = 0;
do{
var limite_de_secuencia = prompt ("¿Hasta que numero se hará la secuencia?");
}while(limite_de_secuencia>15||limite_de_secuencia<3);
for(i=0;i<limite_de_secuencia;i++){
    variable_suma=variable_auxiliar
    fibonacci = fibonacci +", "+ variable_auxiliar;
    variable_auxiliar= parseInt(variable_auxiliar) + parseInt(variable_suma);
    
}
document.write(fibonacci)