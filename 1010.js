/* 
INPUTS
12 1 5.30
16 2 5.10
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var [codigo1, qtd1, preco1] = valores.shift().split(" ")
var [codigo2, qtd2, preco2] = valores.shift().split(" ")

valorTotal1 = qtd1 * preco1
valorTotal2 = qtd2 * preco2

valorTotalCompra = valorTotal1 + valorTotal2

console.log(`VALOR A PAGAR: R$ ${valorTotalCompra.toFixed(2)}`);