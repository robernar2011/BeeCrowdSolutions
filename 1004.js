/* 
INPUTS
3
9
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var a = parseInt(valores.shift())
var b = parseInt(valores.shift())
var produto = a * b

console.log(`PROD = ${produto}`);