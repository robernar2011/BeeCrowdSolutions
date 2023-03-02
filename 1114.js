/* 
INPUTS
2200
1020
2022
2002
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tentativas = lines.length
var senhaCorreta = 2002

for(i=0; i<tentativas; i++){
    var senhaDigitada = parseInt(lines.shift())
    if(senhaDigitada === senhaCorreta){
        console.log('Acesso Permitido');
        return
    }else{
        console.log('Senha Invalida');
    }
}
