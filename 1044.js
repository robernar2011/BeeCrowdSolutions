/* 
INPUTS
6 24
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [a, b] = lines[0].split(" ").map(item => parseInt(item))

if (a % b === 0 || b % a === 0){
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
}