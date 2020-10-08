function calcularQuestao1(){
    let valor1 = parseInt(document.op.valor1.value);
    let valor2 = parseInt(document.op.valor2.value);
    let valor3 = parseInt(document.op.valor3.value);
    let resultado = 0;
    if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
       alert('Valores inválidos!');
    }
    else{
       resultado = (valor1 + valor2 + valor3)/3;
      document.op.resultado.value = resultado.toFixed(2);
 
    }
      
 }

 
 function calcularQuestao2(){
    let nome = (document.op.nome.value);
    let valor = parseFloat(document.op.valor.value);
    let resultado = 0;
    if( isNaN(valor)) {
       alert('Valores inválidos!');
    }
    else{
       resultado = (valor*1.1);
      document.op.resultado.value = resultado.toFixed(2);
 
    }
 }

 function calcularQuestao3(){
   let valor1 = parseInt(document.op.valor1.value);
   let valor2 = parseInt(document.op.valor2.value);
   let resultado = 0;
   if( isNaN(valor1) || (isNaN(valor2))) {
      alert('Valores inválidos!');
   }
   else{
      if(valor1 === valor2){
         resultado = valor1 + valor2;
      }
   else{
      resultado = valor1 * valor2;
   }
     document.op.resultado.value = resultado;

   }

}

function calcularQuestao4(operacao){
   let valor1 = parseFloat(document.op.valor1.value);
   let parcelas = 0;
   let total = 0;
   if(isNaN(valor1)){
      alert('Valor inválido!');
   }
   else{
      switch(operacao){
         case 'tresx':
             total = valor1 * 1.1;
             parcelas = total/3;
             break;
         case 'cincox':
             total = valor1 * 1.2;
             parcelas = total/5;
             break;
         
         default:
             resultado = 0;
     }
     document.op.total.value = total.toFixed(2);
     document.op.parcelas.value = parcelas.toFixed(2);


   }
 
  
}

function calcularQuestao5(){
   let nome = (document.op.nome.value);
   let valor1 = parseFloat(document.op.nota1.value);
   let valor2 = parseFloat(document.op.nota2.value);
   let valor3 = parseFloat(document.op.nota3.value);
   let resultado = "";
   let media = 0;
   let aprovado = "";
   if( isNaN(valor1) || (isNaN(valor2)) || (isNaN(valor3))) {
      alert('Valores inválidos!');
   }
   else if(nome === ""){
      alert('Informe um nome!');

   }
   else{
     media = ( valor1 + valor2 + valor3) / 3;
     resultado = nome + " " + media.toFixed(2);

   if(media >= 8){
      aprovado = "sim";
      
   }
   else{
      aprovado = "não";
   }
     
     document.op.aprovado.value = aprovado;
     document.op.resultado.value = resultado;

   }

}

function calcularQuestao6(){
   let valor1 = parseFloat(document.op.valor1.value);
   let valor2 = parseFloat(document.op.valor2.value);
   let valor3 = parseInt(document.op.valor3.value);
   let resultado = 0;
   if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
      alert('Valores inválidos!');
   }
   else{

      switch(valor3){
         case 1:
             resultado = valor1 + valor2;
              
             break;
         case 2:
             resultado = valor1 * valor2;
             
             break;
         case 3:
            if(valor2 === 0){
               alert('Divisão por zero não permitida');
               resultado = "";
               break;
            }
            resultado = valor1 / valor2;

             break;

         default:
             resultado = 0;
             alert('Opção inválida!');
     }
     
     document.op.resultado.value = resultado;

   }
     
}
 
 function apagar3Campos(){
    document.op.valor1.value = '';
    document.op.valor2.value = '';
    document.op.valor3.value = '';
    document.op.resultado.value = '';
 }

 function apagar2Campos(){
    document.op.valor1.value = '';
    document.op.valor2.value = '';
    document.op.resultado.value = '';
 }

 function apagarQuestao4(){
   document.op.valor1.value = '';
   document.op.parcelas.value = '';
   document.op.total.value = '';
}

function apagarQuestao5(){
   document.op.nome.value = '';
   document.op.nota1.value = '';
   document.op.nota2.value = '';
   document.op.nota3.value = '';
   document.op.aprovado.value = '';
   document.op.resultado.value = '';
}