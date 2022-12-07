/* 
INPUTS
Dia 5
08 : 12 : 23
Dia 9
06 : 13 : 23
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

/* Variáveis de inicio do Evento*/
var data1 = lines[0].split("Dia ");
var d1 = parseInt(data1[1]);

var horario1 = lines[1].split(":");
var h1 = parseInt(horario1[0]);
var m1 = parseInt(horario1[1]);
var s1 = parseInt(horario1[2]);

/* Variáveis de fim do Evento*/
var data2 = lines[2].split("Dia ");
var d2 = parseInt(data2[1]);

var horario2 = lines[3].split(":");
var h2 = parseInt(horario2[0]);
var m2 = parseInt(horario2[1]);
var s2 = parseInt(horario2[2]);

/* Cálculo Duração do Evento*/
var qtdSegundos1 = s1 + (m1*60) + (h1*60*60) + (d1*60*60*24)
var qtdSegundos2 = s2 + (m2*60) + (h2*60*60) + (d2*60*60*24)
var totalSegundos = qtdSegundos2 - qtdSegundos1

var dias = parseInt(totalSegundos / (60*60*24))
var totalSegundos = totalSegundos % (60*60*24)

var horas = parseInt(totalSegundos / (60*60))
var totalSegundos = totalSegundos % (60*60)

var minutos = parseInt(totalSegundos / (60))
var totalSegundos = totalSegundos % (60)

var segundos = totalSegundos

console.log(`${dias} dia(s)
${horas} hora(s)
${minutos} minuto(s)
${segundos} segundo(s)`);
