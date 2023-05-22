/* 
INPUTS
6
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift())
var divisor = 1

while(numero >= divisor){
    if(numero % divisor === 0){
        console.log(divisor);
    }
    divisor++
}
