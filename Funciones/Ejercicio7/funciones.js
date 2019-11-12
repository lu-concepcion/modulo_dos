export const verificarNumero = RUN =>(!isNaN(RUN))

export const verificarSeparaciones = RUN =>{
    let nuevoRUN = "";
    for(let i=0;i<RUN.length;i++){
        if(RUN.charAt(i)=="."){
            RUN = RUN.split(".",3);
            RUN = RUN.split("-");
            }
        }
        for(let i=0;i<3;i++){
            if(nuevoRUN==""){
            nuevoRUN = RUN[i];
            }else{
                nuevoRUN = nuevoRUN+RUN[i];
        }
    }
    return nuevoRUN
}

    