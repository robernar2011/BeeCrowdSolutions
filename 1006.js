/* 
INPUTS
5.0
6.0
7.0
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var pesoA = 2
var pesoB = 3
var pesoC = 5

var notaA = parseFloat(valores.shift())
var notaB = parseFloat(valores.shift())
var notaC = parseFloat(valores.shift())

var media = ((notaA*pesoA) + (notaB*pesoB) + (notaC*pesoC))/10

console.log(`MEDIA = ${media.toFixed(1)}`);
