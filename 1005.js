/* 
INPUTS
5.0
7.1
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var pesoA = 3.5
var pesoB = 7.5

var notaA = parseFloat(valores.shift())
var notaB = parseFloat(valores.shift())

var media = ((notaA*pesoA) + (notaB*pesoB))/11

console.log(`MEDIA = ${media.toFixed(5)}`);
