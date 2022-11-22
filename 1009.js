/* 
INPUTS
JOAO
500.00
1230.30
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var nome = valores.shift()
var salarioSemComissao = parseFloat(valores.shift())
var totalVendas = parseFloat(valores.shift())
var comissao = 0.15

var salarioComComissao = salarioSemComissao + (totalVendas * comissao)

console.log(`TOTAL = R$ ${salarioComComissao.toFixed(2)}`);