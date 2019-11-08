var nroRomano = {
    I: "Uno",
    II: "Dos",
    III: "Tres",
    IV: "Cuatro",
    V: "Cinco",
    VI: "Seis",
    VII: "Siete",
    VIII: "Ocho",
    IX: "Nueve",
    X: "Diez"
}

do {
    var resp = prompt("Ingrese numero romano: ");
    resp = resp.toUpperCase();
    var rep = false;
    
    switch(resp){
        case "I":
            alert(nroRomano.I);
            break;
        case "II":
            alert(nroRomano.II);
            break;
        case "III":
            alert(nroRomano.III);
            break;
        case "IV":
            alert(nroRomano.IV);
            break;
        case "V":
            alert(nroRomano.V);
            break;
        case "VI":
            alert(nroRomano.VI);
            break;
        case "VII":
            alert(nroRomano.VII);
            break;
        case "VIII":
            alert(nroRomano.VIII);
            break;
        case "IX":
            alert(nroRomano.IX);
            break;
        case "X":
            alert(nroRomano.X);
            break;

        default:
            alert("Ingrese opción valida");
            rep = true;
    }

}while(rep);