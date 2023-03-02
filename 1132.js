/* 
INPUTS
100
200
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())
var y = parseInt(lines.shift())
var aux = 0
var soma = 0

if(y<x){
    aux = x
    x = y
    y = aux
}

for(i=x; i<=y; i++){
    if(i%13 !== 0){
        soma+= i
    }
}
console.log(soma);
