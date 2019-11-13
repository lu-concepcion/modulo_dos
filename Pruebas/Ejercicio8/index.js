const encontrarElementoArray = (elemento,arreglo)=>{
    for (let i = 0; i < arreglo.length; i++) {
        if (elemento == arreglo[i]) return true;
        
    }
    return false;
}

var arreglito = []

for (let i = 0; i < 6; i++) {
    arreglito[i] = prompt("ingrese algo");
    
}
var busqueda = prompt ("que desea busccar")

alert( encontrarElementoArray(busqueda,arreglito))