/* 
INPUTS
-3.5
3.5
11.0
10.0
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var notasValidas = 0
var soma = 0

while(notasValidas < 2){
    var nota = parseFloat(lines.shift())
    if(nota >= 0 && nota <= 10){
        soma+=nota
        notasValidas++
    }else{
        console.log('nota invalida');
    }
}

var media = soma / 2
console.log(`media = ${media.toFixed(2)}`);
