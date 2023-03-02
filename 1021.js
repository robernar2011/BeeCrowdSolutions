/* 
INPUTS
576.73
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

var valorDoSaque = parseFloat(valores)
var notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00]
var moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:");
for (var i = 0; i < notas.length; i++){
    qtdNotas = parseInt(valorDoSaque / notas[i])
    console.log(`${qtdNotas} nota(s) de R$ ${notas[i].toFixed(2)}`);
    valorDoSaque = valorDoSaque % notas[i]
}

console.log("MOEDAS:");

for (var j = 0; j < moedas.length; j++){
    qtdMoedas = parseInt(valorDoSaque / moedas[j])
    console.log(`${qtdMoedas} moeda(s) de R$ ${moedas[j].toFixed(2)}`);
    valorDoSaque = (valorDoSaque % moedas[j]+0.00001)
}
