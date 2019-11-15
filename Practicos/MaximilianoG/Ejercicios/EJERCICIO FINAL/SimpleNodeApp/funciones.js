const testing = () => {
    return "test";
}

const ordenarArray = (elementos) =>{
    let elementosOrdenados=[];

    for (let i in elementos){
        let numeroAOrdenar= elementos[i];
        let contador =0;
        let cont =0;
        for (let j in elementos){
            if (elementos[i]==elementos[j]){
                cont ++;
            }
            if ((i!=j) && (elementos[j]<=elementos[i])){
                contador++;
            } 
        }
        elementosOrdenados[contador]=elementos[i];
        if (cont>0){
            for (let k=1; k<cont; k++){
                elementosOrdenados[contador-k]=elementos[i];

            }
        }
    }
    return elementosOrdenados
}

module.exports = {
    testing, ordenarArray
}
