/* 
INPUTS
34
56
44
23
-2
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var somaIdades = 0
var qtdDePessoas = 0

for(i=0; i<lines.length; i++){
    var idade = parseInt(lines[i])
    if(idade > 0){
        somaIdades += idade
        qtdDePessoas += 1
    }else{
        break
    }
}
var media = somaIdades/qtdDePessoas
console.log(media.toFixed(2));
