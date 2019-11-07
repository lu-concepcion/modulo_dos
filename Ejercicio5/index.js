var contador =0;
var auxiliar=0;
var nombre_del_mas_viejo='';
do{
    var nombre = prompt("Ingrese su Nombre");
    if(nombre=='Salir')
    {
        if(contador>3){
            break;
        }
    }
    else{
        var edad = prompt("Ingrese su Edad");
        if(edad>auxiliar){
            auxiliar=edad;
            nombre_del_mas_viejo=nombre;
        }
        contador++;
    }
}while(contador>=0);
document.write("El nombre de la persona mayor es : ",nombre_del_mas_viejo)