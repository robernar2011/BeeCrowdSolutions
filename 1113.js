/* 
INPUTS
5 4
7 2
3 8
2 2
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var casos = lines.length

for(i=0; i<casos; i++){
    var valores = lines.shift().split(' ').map(item => parseInt(item))
    var x = valores[0]
    var y = valores[1]
    if(x > y){
        console.log('Decrescente');
    }else if(x < y){
        console.log('Crescente');
    }else{
        return
    }
}
