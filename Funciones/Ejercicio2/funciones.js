const verificar_vocales = letra => (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u")

export const contar_vocales = frase =>{
    let contador = 0;
    frase = frase.toLowerCase();
    for(let i=0;i<=frase.length;i++){
        if(verificar_vocales(frase.charAt(i))){
            contador++;
        }
    }
    return contador
}