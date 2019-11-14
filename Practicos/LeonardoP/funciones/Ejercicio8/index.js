import{buscaElemento, buscaObjeto, filtrarArray} from '../funciones.js'

let numeros=[1,2,3,4,5,6,7,8];
let nombres=["leo","cata","juan","pato"];
let objeto={};
let autos=[

    {
        marca: "nissan",
        modelo: "v16",
        color: "rojo"
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

//let opcion=prompt("ingrese opcion");


/*

if(buscaElemento(prompt("ingresa un numero para buscar"),numeros)==true)
{
    alert("elemento encontrado!");
}else
{
    alert("elemento perdido uwu");
}

*/



/*objeto=buscaObjeto(autos,prompt("ingrese propiedad"), prompt("valor de la propiedad"))
alert((JSON.stringify(objeto)));
*/






    


let filtrado= [];


filtrado= filtrarArray(autos,prompt("ingrese propiedad"), prompt("valor de la propiedad"));

for(let i=0;i<filtrado.length;i++)
{
   
    alert((JSON.stringify(filtrado[i]))); 
}

