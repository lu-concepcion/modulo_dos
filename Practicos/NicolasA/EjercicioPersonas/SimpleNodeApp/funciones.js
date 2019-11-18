const testing = () => {
    return "test";
}

const digitoVerificador = run => {
    var revertido=0,rutLimpio=run,digito=1;
    //Limpio los caracteres no necesarios
    rutLimpio = rutLimpio.replace(/[\. ,:-]+/g, "");
    //Compruebo si es válido
        //Creo un for con la function floor se detendra hasta llegar a cero
        for (;rutLimpio;rutLimpio=Math.floor(rutLimpio/10))
        digito=(digito+rutLimpio%10*(9-revertido++%6))%11;
        return digito?digito-1:'k'
}

const tienesEdad = (fecha) => {
    const fechaHoy = new Date();
    let edad = fechaHoy.getFullYear() - fecha.getFullYear();
    let mes = (fechaHoy.getMonth() + 1) - fecha.getMonth();
    if (mes < 0 || (mes === 0 && fechaHoy.getDate() < fecha.getDate())) edad--;
    return edad;
}

module.exports = {
    testing,
    digitoVerificador,
    tienesEdad
}
