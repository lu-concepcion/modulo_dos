
import{ encontrarElementoEnArray, encontrarObjetoEnArray, filtrarObjetosArray} from '../../funciones.js';



let salir = false;
let propiedad;
let valor;
let array = [];
//(1) Funcion para encontrar determinado elemento funcion(array, elemento)
//(2) Funcion para buscar un objeto dentro de un array
//(3) Filtrar un array dada una condición
do{
    let opcion = prompt("Escoja una opción:\n (1)Encontrar un elemento\n (2)Encontrar un objeto\n (3)Filtrar un array")
    switch(opcion){
        case "1":
            array = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d"];
            let elemento = prompt("Escriba el elemento a buscar (0-9) || (a-d)");

            if(encontrarElementoEnArray(array, elemento)){
                alert("Encontrado");
            }else{
                alert("No encontrado");
            }

            salir = true;
            break;
        case "2":
            array = [
                {
                  id: 1,
                  valor: "uno"
                },
                {
                  id: 2,
                  valor: "dos"
                }
            ];
            propiedad = "id";
            valor = 1;

            let objeto = encontrarObjetoEnArray(array, propiedad, valor);
            alert(objeto);

            salir = true;
            break;
        case "3":
            array = [
                {
                  id: 1,
                  valor: "uno"
                },
                {
                  id: 2,
                  valor: "dos"
                }
            ];

            propiedad = "id";
            valor = 1;

            var arrayFiltrado = filtrarObjetosArray(array, propiedad, valor);

            alert(arrayFiltrado[0]);
            alert(arrayFiltrado[1]);

            salir = true;
            break;
        default:
            alert("Opción incorrecta")
            break;
    }
}while(salir != true);



