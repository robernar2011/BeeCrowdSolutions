/* 
INPUTS
500
35.0
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

var distancia = parseInt(valores.shift())
var combustivel = parseFloat(valores.shift())

var consumo = distancia / combustivel

console.log(`${consumo.toFixed(3)} km/l`);