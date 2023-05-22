/* 
INPUTS
2
4 3
11 2
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numeroDeCasos = parseInt(lines.shift())
var soma = 0
var contador = 0

for(i=0; i<numeroDeCasos; i++){
    var valores = lines.shift().split(' ')
    var x = parseInt(valores[0])
    var y = parseInt(valores[1])
    
    while(contador < y){
        if(x % 2 !== 0){
            soma += x
            contador++
        }
        x++
    }
    console.log(soma);
    x = 0
    y = 0
    contador = 0
    soma = 0
}
