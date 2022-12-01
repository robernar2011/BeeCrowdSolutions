/* 
INPUTS
16 2
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valores = lines.shift().split(" ")

var horaInicial = parseInt(valores[0])
var horaFinal = parseInt(valores[1])

if(horaInicial > horaFinal){
    var duracaoDoJogo = ((24 - horaInicial) + horaFinal)
    console.log(`O JOGO DUROU ${duracaoDoJogo} HORA(S)`);
}else if(horaInicial < horaFinal){
    var duracaoDoJogo = horaFinal - horaInicial
    console.log(`O JOGO DUROU ${duracaoDoJogo} HORA(S)`);
}else if(horaInicial === horaFinal){
    console.log("O JOGO DUROU 24 HORA(S)");
}