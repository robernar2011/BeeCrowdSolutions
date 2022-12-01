/* 
INPUTS
6.0 4.0 2.0
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [a, b, c] = lines[0].split(" ").map(item => parseFloat(item))

if(((a + b) > c) && ((a + c) > b) && ((b + c) > a)){
    var perimetroTriangulo = a + b + c
    console.log(`Perimetro = ${perimetroTriangulo.toFixed(1)}`);
}else{
    var areaTrapezio = ((a + b) * c) / 2
    console.log(`Area = ${areaTrapezio.toFixed(1)}`);
}
