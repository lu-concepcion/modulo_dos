import{invertir,multiplicar1} from './funciones.js'

let run = prompt("Ingresa rut: ");

let runSplitGuion = run.split("-");
for(let i=0;i<=runSplitGuion.length-1;i++){
     
    alert(runSplitGuion[i]);

}
let runf=[];
   let runSplitPunto = runSplitGuion[0].split(".");
    console.log(runSplitPunto.length);
   for(let i=0;i<=runSplitPunto.length-1;i++){
     runf+=runSplitPunto[i];
    alert(runf );

}
  alert(invertir(runf))

  alert(multiplicar1(invertir(runf)))   



