/* 
INPUTS
7.0 5.0 7.0
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var valores = lines.shift().split(" ")

valores.sort(function(a, b){
    return b - a
})

var A = parseFloat(valores[0])
var B = parseFloat(valores[1])
var C = parseFloat(valores[2])

// Triangle Types

if(A >= B + C){
    console.log("NAO FORMA TRIANGULO");
    return
}

if((A*A) === (B*B) + (C*C)){
    console.log("TRIANGULO RETANGULO");
}

if((A*A) > (B*B) + (C*C)){
    console.log("TRIANGULO OBTUSANGULO");
}

if((A*A) < (B*B) + (C*C)){
    console.log("TRIANGULO ACUTANGULO");
}

if(A === B && B === C){
    console.log("TRIANGULO EQUILATERO");
}

if((A === B && B != C) || (A === C && C != B) || (B === C && B != A)){
    console.log("TRIANGULO ISOSCELES");
}
