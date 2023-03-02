/* 
INPUTS
3
3 -2
-8 0
0 8
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numeroDeDivisoes = parseInt(lines.shift())

for(i=0; i<numeroDeDivisoes; i++){
    var valores = lines.shift().split(' ').map(item => parseInt(item))
    var x = valores[0]
    var y = valores[1]

    if(y === 0){
        console.log('divisao impossivel');
    }else{
        var divisao = x / y
        console.log(`${divisao.toFixed(1)}`);
    }
}
