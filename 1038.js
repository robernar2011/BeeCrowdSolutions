/* 
INPUTS
3 2
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split('\n');

var [cod, qtd] = valores.shift().split(" ").map(item => parseInt(item))
var preco = 0;

switch(cod){
    case 1:
        preco = 4.00
        break
    case 2:
        preco = 4.50
        break
    case 3:
        preco = 5.00
        break
    case 4:
        preco = 2.00
        break
    case 5:
        preco = 1.50
        break
}

var valorAPagar = preco * qtd
console.log(`Total: R$ ${valorAPagar.toFixed(2)}`);
