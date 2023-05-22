/* 
INPUTS
5
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numeroDeLinhas = parseInt(lines.shift())
var numeroInicial = 1
var texto = ""

while(numeroDeLinhas > 0){
    texto += numeroInicial + " "
    texto += Math.pow(numeroInicial, 2) + " "
    texto += Math.pow(numeroInicial, 3)
    console.log(texto);
    texto = ""
    numeroInicial++
    numeroDeLinhas--
}
