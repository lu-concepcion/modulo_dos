var cont =0;
var res ='';
var lp ='';
do{
    var lp = prompt("Introduce el nombre de un lenguaje de programacion");
    if (lp!='Python'){
        res+=lp+'-';
        cont++;
    }
    else{
        if(cont>3){
            res+=lp;
        }
    }
}while(lp!='Python'|| cont<4);
alert(res);
