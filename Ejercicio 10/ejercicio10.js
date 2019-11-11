var nRomanos = {
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

var resultado;
var romano = prompt("ingrese un numero romano");

for (let i = 0; i < nRomanos.length; i++) {

    if (nRomanos[i] == romano) {
        resultado = nRomanos[i];
    }
  }
  alert(romano + " Es igual a " + resultado);

  /*
    var resultado;
    for (var i in nRomanos) {
      //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
      if (nRomanos.hasOwnProperty(i) == romano) {
          resultado = nRomanos[i];
      }
    }  
  alert(romano + " Es igual a " + resultado);

  */