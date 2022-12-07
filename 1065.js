/* 
INPUTS
7
-5
6
-4
12
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valores = []

for(i=0; i < 5; i++){
    var valor = parseInt(lines.shift())
    valores[i] = valor
}

var valorPar = 0

valores.forEach(valor =>{
    if(valor % 2 === 0){
        valorPar++
    }
})

console.log(`${valorPar} valores pares`);