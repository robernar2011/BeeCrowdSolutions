/* 
INPUTS
400
*/

var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n")

var idadeEmDias = parseInt(valores)

var anos = parseInt(idadeEmDias / 365)

var idadeEmDias = idadeEmDias % 365

var mes = parseInt(idadeEmDias / 30)

var dias = idadeEmDias % 30

let resultado = `${anos} ano(s)
${mes} mes(es)
${dias} dia(s)`

console.log(resultado)
