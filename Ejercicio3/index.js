var nota = prompt("Introduce tu calificación");
not= parseInt(nota);

if(nota<1){alert("Ingrese una calificacion válida")
}else if(nota>=1 && nota<=3){
    alert("Muy bajo")
}else if(nota<=5){
    alert("Regular")
}else if(nota<=7){
    alert("Muy Bueno")
}else{alert("Ingrese una calificacion válida")}