const codigoVerificador = (rut) => {
    let aux = rut.split("-");
    rut = aux[0];
    aux = rut.split(".");
    let aux2 = [];

    for (let i=0; i<aux.length; i++){
        aux2 = aux2 + aux[i];
    }

    let rutInvertido = "";
    let x = aux2.length - 1;
    while(x >= 0){
        rutInvertido = rutInvertido + aux2.charAt(x);
        x--;
    }

    const serie = [2,3,4,5,6,7,2,3,4,5,6,7];
    let multiplicacion = 0;
    for(let i=0; i < rutInvertido.length; i++){
        multiplicacion = multiplicacion + (serie[i] * parseInt(rutInvertido.charAt(i)));
    }

    multiplicacion = multiplicacion % 11;
    multiplicacion = 11 - multiplicacion;
    switch(multiplicacion){
        case 11:
            return 0;
        case 10:
            return "K"
        default:
            return multiplicacion;
    }
}

const obtenerEdadPersona = (fechaNacimiento) => {
    let dia, mes, anio;
    let edad = 0;
    const hoy = new Date();

    if (fechaNacimiento.charAt(0) == '0') {
        dia = fechaNacimiento.charAt(1);
    } else {
        dia = fechaNacimiento.substr(0,1);
    }

    if (fechaNacimiento.charAt(3) == '0') {
        mes = fechaNacimiento.charAt(4);
    } else {
        mes = fechaNacimiento.substr(3,4);
    }
    anio = fechaNacimiento.substr(6,9);

    const fecha = new Date(anio,mes,dia);

        if ((hoy.getMonth()+1) >= fecha.getMonth() && hoy.getDate() >= fecha.getDate()) {
            edad = hoy.getFullYear() - fecha.getFullYear();
        } else {
            edad = (hoy.getFullYear()-1) - fecha.getFullYear();
        }
    return edad;
}

//Busca un objeto, devuelve el objeto buscado
const buscarEnArray = (array, propiedad, valor ) => {
    let objeto = {};
    array.forEach(element => {
        if(element[propiedad] == valor){
            objeto = element;
        }
    });
    return objeto;
}

//Busca si existe un objeto (devuelve true o false)
const searchInArray = (array, propiedad, valor) => {
    let encuentro = false;
    array.forEach(element => {
        if(element[propiedad] == valor){
            encuentro = true;
        }
    });
    return encuentro;
}

const deleteElementoArray = (array, propiedad, valor) => {
    let objeto = 0;
    array.forEach(element => {
        if(element[propiedad] == valor){
            objeto = array.lastIndexOf(valor);
            array.splice(objeto,1);
        }
    })
}

const verNum = (numero) => {
    return isNaN(parseInt(numero));
}

const searchArray = (array, propiedad, valor) => {
    //Devuelve un array
    let obj = [];
    array.forEach(element => {
        if(element[propiedad] == valor){
            obj.push(element);
        }
    });
    return obj;
}

module.exports = {
    testing, codigoVerificador, buscarEnArray, obtenerEdadPersona, verNum,
    searchInArray, deleteElementoArray, searchArray
}