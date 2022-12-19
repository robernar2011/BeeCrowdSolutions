/* 
INPUTS
3
6.5 4.3 6.2
5.1 4.2 8.1
8.0 9.0 10.0
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var pessoas = parseInt(lines.shift())
var contador = 0

while(contador < pessoas){
    var [p1, p2, p3] = lines[contador].split(" ").map(item => parseFloat(item))
    var media = (p1*2 + p2*3 + p3*5) / 10
    console.log(media.toFixed(1));
    contador++
}
