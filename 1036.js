/* 
INPUTS
10.0 20.1 5.1
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split('\n');

var [a, b, c] = valores.shift().split(" ").map(item => parseFloat(item))

var delta = (b * b) - 4 * (a * c)
var r1 = (-b + Math.sqrt(delta))/(2*a)
var r2 = (-b - Math.sqrt(delta))/(2*a)

if (delta < 0 || a === 0){
    console.log("Impossivel calcular")
}
else{
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}
