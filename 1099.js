/* 
INPUTS
7
4 5
13 10
6 4
3 3
3 5
3 4
3 8
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let casos = parseInt(lines.shift())

for(i=0; i<casos; i++){
    let [x, y] = (lines.shift().split(' ')).map(item => parseInt(item))
    let menor = Math.min(x, y)
    let maior = Math.max(x, y)
    let somaDosImpares = 0

    for(j = menor+1; j < maior; j++){
        if(j%2 !== 0){
            somaDosImpares += j
        }
    }
    console.log(somaDosImpares);
}
