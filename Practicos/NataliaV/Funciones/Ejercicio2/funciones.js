const vocales= vocal=>(vocal=="a"||vocal=="e"||vocal=="i"||vocal=="o"||vocal=="u")
export const contarvocales= (palabra) =>{
    let contador=0;
    for(let i=0;i<=palabra.length;i++){
        if(vocales(palabra.charAt(i)))
        contador++;

    }
    return(contador);
}