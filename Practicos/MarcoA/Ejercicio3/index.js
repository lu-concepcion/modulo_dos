do{
    var nota = prompt("Ingrese su calificacion");
    }while(parseInt(nota)<1||parseInt(nota)>7);
    if(parseInt(nota)<=3&&parseInt(nota)>=1){
        alert("Muy bajo")
    }else{
    if(parseInt(nota)>=4&&parseInt(nota)<=5){
        alert("Regular")
    }else{
    if(parseInt(nota)>=6&&parseInt(nota)<=7){
        alert("Muy bueno")
    }}}