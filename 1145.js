/* 
INPUTS
3 99
*/

const { text } = require('node:stream/consumers');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ')
var numerosPorLinha = parseInt(valores[0])
var numeroFinal = parseInt(valores[1])
var numeroInicial = 1
var texto = ""


while(numeroFinal > 0){
    for(i=1; i<numerosPorLinha; i++){
        texto += numeroInicial + " "
        numeroInicial++
        numeroFinal--
    }   
    texto += numeroInicial
    numeroInicial++
    numeroFinal--

    console.log(texto);
    texto = ""
}
