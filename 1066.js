/* 
INPUTS
-5
0
-3
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

var ehPar = 0
var ehImpar = 0
var positivo = 0
var negativo = 0

valores.forEach(valor =>{
    if(valor % 2 === 0){
        ehPar++
    }else{
        ehImpar++
    }

    if(valor > 0){
        positivo++
    }else if (valor < 0){
        negativo++
    }
})

console.log(`${ehPar} valor(es) par(es)
${ehImpar} valor(es) impar(es)
${positivo} valor(es) positivo(s)
${negativo} valor(es) negativo(s)`);