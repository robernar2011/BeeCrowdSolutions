/* 
INPUTS
7 14 106
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

var [a, b, c] = valores.shift().split(" ").map(item => parseFloat(item))

var maiorAB = (a + b + (Math.abs(a - b))) / 2
var maiorDeTodos = (maiorAB + c + (Math.abs(maiorAB - c))) / 2

console.log(`${maiorDeTodos} eh o maior`);