/* 
INPUTS
10
18
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())
var y = parseInt(lines.shift())
var aux = 0

if(y<x){
    aux=x
    x=y
    y=aux
}

for(i=x+1; i<y; i++){
   if(i%5 === 2 || i%5 === 3){
    console.log(i);
    }
}
