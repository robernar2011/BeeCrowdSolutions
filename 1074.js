/* 
INPUTS
4
-5
0
3
-4
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var numerodeEntradas = parseInt(lines.shift())
var valores = []

for(i=0; i<numerodeEntradas; i++){
    valores[i] = parseInt(lines.shift())
    if(valores[i] < 0 && valores[i] % 2 != 0){
        console.log("ODD NEGATIVE");
    }else if(valores[i] > 0 && valores[i] % 2 != 0){
        console.log("ODD POSITIVE");
    }else if(valores[i] < 0 && valores[i] % 2 === 0){
        console.log("EVEN NEGATIVE");
    }else if(valores[i] > 0 && valores[i] % 2 === 0){
        console.log("EVEN POSITIVE");
    }else{
        console.log("NULL");
    }
}



