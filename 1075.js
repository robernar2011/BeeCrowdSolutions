/* 
INPUTS
13
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valor = parseInt(lines.shift())
var referencia = 10000

var contador = 0
while(contador <= referencia){
    if(contador % valor === 2){
        console.log(contador);
    }
    contador++
}
