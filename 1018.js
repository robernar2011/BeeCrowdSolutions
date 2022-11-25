/* 
INPUTS
576
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

qtdNotas = 0;
var valor = parseInt(valores.shift())
var notas = [100, 50, 20, 10, 5, 2, 1]

console.log(valor);

for(var i = 0; i < notas.length; i++){
    qtdNotas = parseInt(valor / notas[i])
    console.log(`${qtdNotas} nota(s) de R$ ${notas[i]},00`);
    valor = valor % notas[i]
}
