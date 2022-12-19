/* 
INPUTS
10
10 C
6 R
15 S
5 C
14 R
9 C
6 R
8 S
5 C
14 R
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

let totalAnimais = 0
let totalCoelhos = 0
let totalRatos = 0
let totalSapos = 0

for (let i=0; i < lines.length; i++){
    const [quantidade, especie] = lines[i].split(' ')

    if(especie == "C\r" || especie == "C"){
        totalCoelhos += parseInt(quantidade)        
    }

    if(especie == "R\r" || especie == "R"){
        totalRatos += parseInt(quantidade)    
    }

    if(especie == "S\r" || especie == "S"){
        totalSapos += parseInt(quantidade)        
    }   
}
totalAnimais = totalCoelhos + totalRatos + totalSapos

var percentualCoelho = (totalCoelhos/totalAnimais) * 100
var percentualRato = (totalRatos/totalAnimais) * 100
var percentualSapo = (totalSapos/totalAnimais) * 100

console.log(`Total: ${totalAnimais} cobaias 
Total de coelhos: ${totalCoelhos}
Total de ratos: ${totalRatos}
Total de sapos: ${totalSapos}
Percentual de coelhos: ${percentualCoelho.toFixed(2)} %
Percentual de ratos: ${percentualRato.toFixed(2)} %
Percentual de sapos: ${percentualSapo.toFixed(2)} %`);
