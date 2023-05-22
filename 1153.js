/* 
INPUTS
4
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var fatorial = parseInt(lines.shift())
var calculo = 1

for(i=fatorial; i>0; i--){
    calculo *= i
}
console.log(calculo);
