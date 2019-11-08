var numeros_romanos = {
    I = "Uno",
    II = "Dos",
    III = "Tres",
    IV = "Cuatro",
    V = "Cinco",
    VI = "Seis",
    VII = "Siete",
    VIII = "Ocho",
    IX = "Nueve",
    X = "Diez"
};
flag = 0;

do{
var consultar_opcion = prompt ("Ingrese su numero romano");
consultar_opcion = consultar_opcion.toLocaleUpperCase;
switch(consultar_opcion){
    case I:
        alert(numeros_romanos.I)
        flag=1;
        break;
    case II:
        alert(numeros_romanos.II)
        flag=1;
        break;
    case III:
        alert(numeros_romanos.III)
        flag=1;
        break;
    case IV:
        alert(numeros_romanos.IV)
        flag=1;
        break;
    case V:
        alert(numeros_romanos.V)
        flag=1;
        break;
    case VI:
        alert(numeros_romanos.VI)
        flag=1;
        break;
    case VII:
        alert(numeros_romanos.VII)
        flag=1;
        break;
    case VIII:
        alert(numeros_romanos.VIII)
        flag=1
        break;
    case IX:
        alert(numeros_romanos.IX)
        flag=1;
        break;
    case X:
        alert(numeros_romanos.X)
        flag=1
        break;
    default:
        alert("El valor ingresado no es romano")
}
}while(flag==0);