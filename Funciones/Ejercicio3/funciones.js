export const voltear_palabra = palabra =>{
    var nueva_palabra="";
    console.log(`a: ${palabra.length}`)
    let largo = palabra.length

    for(var i=largo;i>=0;i--){
        console.log(`b: ${palabra.charAt(i)}`)
        if(nueva_palabra==""){

        nueva_palabra= palabra.charAt(i);
        }else{
            nueva_palabra = nueva_palabra+palabra.charAt(i);
        }
    }
    return nueva_palabra
}

export const verificar_palindrome = (frase) =>(voltear_palabra(frase)==frase)
