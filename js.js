const inPalavra = document.getElementById("inPalavra");
const btVerifica = document.getElementById("btVerifica");
var outVerificacao = document.getElementById("outVerificacao");
var acumulado = "";
var contador = 0;//variavel de controle

btVerifica.addEventListener("click", verificar);

function verificar() {
   var palavra = inPalavra.value;
   acumulado += palavra + " "; 
   var contador = 0;
   //emquanto
   while (contador < 100) {
      acumulado += palavra + " "; 
      contador++; 
   }
   outVerificacao.innerHTML = acumulado; 
}


