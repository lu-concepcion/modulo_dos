var calificacion = prompt('Ingrese calificación');

let n = parseInt(calificacion);

if (n >= 1 && n <= 3) {
    alert('Muy bajo');
} else if (n >= 4 && n <= 5){
    alert('Regular');
} else if (n >= 6 && n <= 7) {
    alert('Muy bueno');
}
