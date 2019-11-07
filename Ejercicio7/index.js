var Nsucesiones = prompt("ingrese las suceciones de Fibonacci que desea")
fibonacci=[0,1];
num1, num2 =1;
do{
    for(i=0; i<Nsucesiones; i++){
        resultado=num1+num2;
        fibonacci.push(resultado);
        num1=resultado;
        num2=num1;
    }
}while(Nsucesiones>=3 && Nsucesiones<=15)