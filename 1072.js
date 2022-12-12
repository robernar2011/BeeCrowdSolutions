/* 
INPUTS
4
14
123
10
-25
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var numeroDeCasos = parseInt(lines.shift())
var valor = []
var dentro = 0
var fora = 0

for(i=0; i<numeroDeCasos; i++){
    var indice = parseInt(lines.shift())
    valor[i] = indice
}

for(i=0; i<valor.length; i++){
    if(valor[i] >= 10 && valor[i] <= 20){
        dentro++
    }else{
        fora++
    }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);
