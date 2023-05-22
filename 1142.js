/* 
INPUTS
7
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var contador = parseInt(lines.shift())
var posicoeAntesDoPum = 0
var numeroInicial = 1
var texto = ""

while(contador>0){
    while(posicoeAntesDoPum < 3){
        texto += numeroInicial + " "
        numeroInicial++
        posicoeAntesDoPum++
    }
    console.log(`${texto}PUM`);
    texto = ""
    numeroInicial+=1
    posicoeAntesDoPum = 0
    contador--
}
