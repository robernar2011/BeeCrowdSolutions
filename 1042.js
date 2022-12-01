/* 
INPUTS
7 21 -14
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [x, y, z] = lines[0].split(" ").map(item => parseInt(item))

var valores = []

valores.push(x, y, z)

valores.sort(function(a, b){
    return a - b
})

console.log(`${valores[0]}
${valores[1]}
${valores[2]}`);

console.log("");

console.log(`${x}
${y}
${z}`);