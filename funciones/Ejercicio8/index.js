import{buscaElemento, buscaObjeto} from '../funciones.js'

let numeros=[1,2,3,4,5,6,7,8];
let nombres=["leo","cata","juan","pato"];
let objeto;
let autos=[

    {
        marca: "nissan",
        modelo: "v16",
        color: "negro"
    },
    {
        marca: "toyota",
        modelo: "yaris",
        color: "rojo"
    },
    {
        marca: "peugeot",
        modelo: "206",
        color: "azul"
    }
];
console.log("array numeros: "+numeros+"  array nombres: "+nombres);



/*if(buscaElemento(prompt("ingresa un numero para buscar"),numeros)==true)
{
    alert("elemento encontrado!");
}else
{
    alert("elemento perdido uwu");
}

/*if(buscaElemento(prompt("ingresa un nombre para buscar"),nombres)==true)
{
    alert("elemento encontrado!");
}else
{
    alert("elemento perdido uwu");
} */

if(buscaObjeto(autos,"modelo","yaris"==true))
{
    
}else
{
    
}


