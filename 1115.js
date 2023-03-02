/* 
INPUTS
2 2
3 -2
-8 -1
-7 1
0 2
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var casos = lines.length

for(i=0; i<casos; i++){
    var paresOrdenados = lines.shift().split(' ').map(item => parseInt(item))
    var x = paresOrdenados[0]
    var y = paresOrdenados[1]

    if(x>0 && y>0){
        console.log('primeiro');
    }else if(x<0 && y>0){
        console.log('segundo');
    }else if(x<0 && y<0){
        console.log('terceiro');
    }else if(x>0 && y<0){
        console.log('quarto');
    }else{
        return
    }
}
