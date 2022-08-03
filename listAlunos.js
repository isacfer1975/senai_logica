 
var alunos = ["isaac", "pedro", "isabel", "ana", "maria", "luis", "josé"];

for (cont = 0 ; cont < alunos.length ; cont++){
   var nome =  alunos[cont];
   console.log("oi " + nome +"!");
    
   //alunos.forEach(Element => {
   
   if (cont == 0){
        console.log("seu número é " + cont) + ".";
    } else if (cont % 2 == 0){
        console.log("seu número é " + cont + " e é par!");
    } else {
        console.log("seu número é " + cont + " e é ímpar!");
    ;}
    
   //});
}