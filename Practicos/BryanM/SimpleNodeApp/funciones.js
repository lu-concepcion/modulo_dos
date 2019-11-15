const testing = () => {
    return "test";
}

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

const buscarEnArray = (array, propiedad, valor ) => {
    let objeto = {};
    array.forEach(element => {
        if(element[propiedad] == valor){
            objeto = element;
        }
    });
    return objeto;
}

module.exports = {
    testing, codigoVerificador, buscarEnArray
}