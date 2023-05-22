/* 
INPUTS
5
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var Fibonacci = parseInt(lines.shift())
var texto = ""

var pos1 = 0
var pos2 = 1
var pos3 = 0

for(i=0; i<Fibonacci-1; i++){
    texto += pos3 + " "
    pos1 = pos2
    pos2 = pos3
    pos3 = pos1 + pos2
}
pos3 = pos1 + pos2
texto += pos3

console.log(texto);
