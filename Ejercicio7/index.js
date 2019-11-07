fibonacci=[0,1];
do{
    var Nsucesiones = prompt("ingrese las suceciones de Fibonacci que desea")
}while(Nsucesiones<=3 && Nsucesiones>=15)
for(i=2; i<Nsucesiones; i++){
    fibonacci[i]=parseInt(fibonacci[i-1])+parseInt(fibonacci[i-2]);
}
document.write(fibonacci)