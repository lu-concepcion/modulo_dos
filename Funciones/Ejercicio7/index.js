import{invertir,multiplicar1,numeroverificador} from './funciones.js'

let run = prompt("Ingresa rut: ");

let runSplitGuion = run.split("-");
for(let i=0;i<=runSplitGuion.length-1;i++){
     
    runSplitGuion[i];

}
let runf=[];
   let runSplitPunto = runSplitGuion[0].split(".");
    console.log(runSplitPunto.length);
   for(let i=0;i<=runSplitPunto.length-1;i++){
     runf+=runSplitPunto[i];
    

}
  alert(("su rut sin numero verificador es: "+runf ));
  alert("su rut invertido es: "+(invertir(runf)))

  multiplicar1(invertir(runf));   
  alert("su numero verificador es: "+numeroverificador(multiplicar1(invertir(runf))))



