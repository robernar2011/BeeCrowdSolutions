/* 
INPUTS
2
113
45
34565
6
...
8
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var numeros = []
var maior = 0
var posicao = 0

for (i=0; i<100; i++){
    numeros[i] = parseInt(lines.shift())
    if(numeros[i] > maior){
        maior = numeros[i]
        posicao = i+1
    }
}

console.log(maior);
console.log(posicao);
