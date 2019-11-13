import{invertir,numeroverificador} from './funciones.js'

let run = prompt("Ingresa rut: ");

let runSplitGuion = run.split("-");
for(let i=0;i<=runSplitGuion.length-1;i++){
     
    alert(runSplitGuion[i]);

}
   let runSplitPunto = runSplitGuion[0].split(".");
    console.log(runSplitPunto.length);
   for(let i=0;i<=runSplitPunto.length-1;i++){
     
    alert(runSplitPunto[i]);

}
  alert(invertir(runSplitPunto))

  alert(numeroverificador(invertir(runSplitPunto)))   



