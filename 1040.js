/* 
INPUTS
2.0 4.0 7.5 8.0
6.4
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split('\n');

const valores1 = valores[0].split(" ")
const nota1 = parseFloat(valores1[0])
const nota2 = parseFloat(valores1[1])
const nota3 = parseFloat(valores1[2])
const nota4 = parseFloat(valores1[3])
const notaExame = parseFloat(valores[1])

const peso1 = 2
const peso2 = 3
const peso3 = 4
const peso4 = 1

var media = ((peso1*nota1) + (peso2*nota2) + (peso3*nota3) + (peso4*nota4)) / 10
var mediaFinal = (media + notaExame)/2

if(media >= 7.0){
    console.log(`Media: ${media.toFixed(1)}
Aluno aprovado.`)
}else if(media < 5.0){
    console.log(`Media: ${media.toFixed(1)}
Aluno reprovado.`)
}else if(notaExame >= 5.0){
    console.log(`Media: ${media.toFixed(1)}
Aluno em exame.
Nota do exame: ${notaExame.toFixed(1)}
Aluno aprovado.
Media final: ${mediaFinal.toFixed(1)}`)
}else{
    console.log(`Media: ${media.toFixed(1)}
Aluno em exame.
Nota do exame: ${notaExame.toFixed(1)}
Aluno reprovado.
Media final: ${mediaFinal.toFixed(1)}`)
}
