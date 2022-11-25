/* 
INPUTS
30
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

var distancia = parseInt(valores.shift())

var minutosNecessarios = (60 * distancia) / 30

console.log(`${minutosNecessarios} minutos`);
