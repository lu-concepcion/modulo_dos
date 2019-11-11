registros = 0;
modEdad = 0;

do{

    var perNombre = prompt ("Ingrese un nombre")

    var perEdad = prompt ("Ingrese su edad")

    if (perEdad>modEdad){

        modNombre = perNombre
        modEdad = perEdad
        registros++

    }else{

        registros++

    }

 

}while(registros < 4);

var persona={

    nombre: modNombre,
    edad: modEdad

};

var { nombre, edad } = persona;
alert ("La persona con mayor edad es")
alert(`${nombre} ${edad}`); 