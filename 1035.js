/* 
INPUTS
5 6 7 8
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

var [a, b, c, d] = valores.shift().split(" ").map(item => parseInt(item))

if( b > c 
    && d > a 
    && (c + d) > (a + b) 
    && c >= 0 
    && d >= 0 
    && a % 2 === 0){
    console.log("Valores aceitos")
} else{
    console.log("Valores nao aceitos");
}