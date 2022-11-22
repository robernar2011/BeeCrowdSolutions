/* 
INPUTS
2.00
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

pi = 3.14159
var raio = parseFloat(valores.shift())
var area = pi * ((Math.pow(raio, 2)))

console.log(`A = ${area.toFixed(4)}`);