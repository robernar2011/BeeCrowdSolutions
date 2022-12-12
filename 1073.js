/* 
INPUTS
6
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valor = parseInt(lines.shift())
var indice = 1

while(indice <= valor){
    if(indice % 2 === 0){
        var quadrado = Math.pow(indice, 2)
        console.log(`${indice}^2 = ${quadrado}`);
    }
    indice++
}
