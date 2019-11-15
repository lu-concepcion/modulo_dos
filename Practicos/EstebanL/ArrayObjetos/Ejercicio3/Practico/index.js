
alert ("Bienvenid@ a Not")

var n1 = prompt ("Ingrese calificacion.");

var n2 = parseInt (n1);

if (0<n2 & n2<4){

    alert ("El rendimiento del alumno fue muy bajo.")

}else{
    if (3<n2 & n2<6){

    alert ("El rendimiento del alumno fue regular.")

    }else{
        if (5<n2 & n2<8){

        alert ("El rendimiento del alumno fue muy bueno.")

        }else{

            alert ("La calificacion ingresada no puede ser evaluada.")

        }
    }
} 