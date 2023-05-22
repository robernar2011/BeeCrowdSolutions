/* 
INPUTS
8
1
7
2
2
4
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var alcool = 0
var gasolina = 0
var diesel = 0
var n1 = parseInt(lines.shift())

while(n1 != 4){
    if (n1 == 1){
        alcool ++;
    }else if (n1 == 2){
        gasolina++;
    }else if (n1 == 3){
        diesel++;
    } 
    var n1 = parseInt(lines.shift())
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);
