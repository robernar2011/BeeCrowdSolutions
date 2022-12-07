/* 
INPUTS
8
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valor = parseInt(lines.shift())

for(i=1; i<=valor; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}