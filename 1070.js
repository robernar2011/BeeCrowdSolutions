/* 
INPUTS
8
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valor = parseInt(lines.shift())
var controle = 0

while(controle < 6){
    if(valor % 2 != 0){
        console.log(valor);
        controle++
    }
    valor++
}