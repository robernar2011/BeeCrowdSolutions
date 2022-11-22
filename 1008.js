/* 
INPUTS
25
100
5.50
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var idFuncionario = parseInt(valores.shift())
var horasTrabalhadas = parseInt(valores.shift())
var salarioPorHora = parseFloat(valores.shift())

var salarioMes = horasTrabalhadas * salarioPorHora

console.log(`NUMBER = ${idFuncionario}`);
console.log(`SALARY = U$ ${salarioMes.toFixed(2)}`);