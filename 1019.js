/* 
INPUTS
556
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

var tempoEmSegundos = parseInt(valores.shift())

var horas = parseInt(tempoEmSegundos / 3600)
tempoEmSegundos = tempoEmSegundos % 3600

var minutos = parseInt(tempoEmSegundos / 60)
var segundos = tempoEmSegundos % 60

console.log(`${horas}:${minutos}:${segundos}`);
