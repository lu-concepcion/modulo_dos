let arrayPersonas = [
    {
        nombre: 'Felipe',
        fechaNacimiento: '18/09/1992'
    }
];

const fecha = new Date("1992","11","15");
const hoy = new Date();

let edadLimite = 18;
let edad = 0;

if ((hoy.getMonth()+1) >= fecha.getMonth() && hoy.getDate() >= fecha.getDate()) {
    edad = hoy.getFullYear() - fecha.getFullYear();
} else {
    edad = (hoy.getFullYear()-1) - fecha.getFullYear();
}

console.log('Fecha: ' + fecha);
console.log('Hoy: ' + hoy);
console.log('Edad: ' + edad);