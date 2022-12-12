/* 
INPUTS
140
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valor = parseInt(lines.shift())

for(i=1; i<=10; i++){
    var resultado = i * valor
    console.log(`${i} x ${valor} = ${resultado}`);
}
