/* 
INPUTS
3.0 4.0 5.2
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

var pi = 3.14159
var [a, b, c] = valores.shift().split(" ")

var areaTriangRetang = (a * c)/2
var areaCirculoC = pi * (Math.pow(c, 2))
var areaTrapezio = ((parseFloat(a) + parseFloat(b)) * c) / 2
var areaQuadradoB = b * b
var areaRetangulo = a * b

console.log(`TRIANGULO: ${areaTriangRetang.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculoC.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadradoB.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
