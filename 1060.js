/* 
INPUTS
7
-5
6
-3.4
4.6
12
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valores = []

for(i = 0; i < 6; i++){
    var valor = parseFloat(lines.shift())
    valores[i] = valor
}

var contador = 0

valores.forEach(valor =>{
    if(valor > 0){
        contador++
    }
})
console.log(`${contador} valores positivos`);