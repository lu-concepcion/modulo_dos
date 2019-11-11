const vocales= vocal=>(vocal=="a"||vocal=="e"||vocal=="i"||vocal=="o",vocale=="u")
const contarvocales= palabra =>{
    let contador;
    for(let i=0;i<=palabra.length;i++){
        if(vocales(palabra.charAt(i)))
        contador++;

    }
    return(0);
}