/* 
INPUTS
10
85
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

var consumo = 12
var horasGastas = parseInt(valores.shift())
var velocidadeMedia = parseInt(valores.shift())

var litrosDeCombustivel = (velocidadeMedia / consumo) * horasGastas

console.log(litrosDeCombustivel.toFixed(3));