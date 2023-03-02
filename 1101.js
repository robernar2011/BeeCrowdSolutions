/* 
INPUTS
5 2
6 3
5 0
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var casos = lines.length

for(i=0; i<casos; i++){
    var valores = lines.shift().split(' ').map(item => parseInt(item))
    var soma = 0
    var texto = ""
    var menor = Math.min(valores[0], valores[1])
    var maior = Math.max(valores[0], valores[1])
    
    while(menor <= maior){
        if(maior === 0 || menor === 0){
            return
        }else{
            texto += menor + " "
            soma += menor
            menor++
        }
    }
    console.log(`${texto}Sum=${soma}`);
}
