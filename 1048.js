/* 
INPUTS
400.00
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var salario = parseFloat(lines.shift())

function aumentoDoSalario(salario, taxadeReajuste){
    reajuste = salario * taxadeReajuste
    salarioComAumento = salario + reajuste
    return salarioComAumento
}

if(salario <= 400.00){
    var taxadeReajuste = 0.15
    aumentoDoSalario(salario, taxadeReajuste)

    console.log(`Novo salario: ${salarioComAumento.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 15 %`);

} else if(salario >= 400.01 && salario <= 800.00){
    var taxadeReajuste = 0.12
    aumentoDoSalario(salario, taxadeReajuste)

    console.log(`Novo salario: ${salarioComAumento.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 12 %`);

} else if(salario >= 800.01 && salario <= 1200.00){
    var taxadeReajuste = 0.10
    aumentoDoSalario(salario, taxadeReajuste)

    console.log(`Novo salario: ${salarioComAumento.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 10 %`);

} else if(salario >= 1200.01 && salario <= 2000.00){
    var taxadeReajuste = 0.07
    aumentoDoSalario(salario, taxadeReajuste)

    console.log(`Novo salario: ${salarioComAumento.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 7 %`);

} else {
    var taxadeReajuste = 0.04
    aumentoDoSalario(salario, taxadeReajuste)

    console.log(`Novo salario: ${salarioComAumento.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 4 %`);
} 
