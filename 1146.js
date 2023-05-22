/* 
INPUTS
5
10
3
0
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var texto = ""
var valores = []
var numeroInicial = 1

for(i=0; i<lines.length; i++){
    valores[i] = parseInt(lines[i])
    if(valores[i] != 0){
        while(numeroInicial < valores[i] ){
            texto += numeroInicial + " "
            numeroInicial++
        }
        texto += valores[i]
        console.log(texto);
        texto = ""
        numeroInicial = 1
    }else{
        return
    }
}
