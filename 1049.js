/* 
INPUTS
vertebrado
mamifero
onivoro
*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

/*CASES:
Vertebrado, Ave, Carnivoro => AGUIA
Vertebrado, Ave, Onivoro => POMBA
Vertebrado, Mamifero, Onivoro => HOMEM
Vertebrado, Mamifero, Herbivoro => VACA
Invertebrado, Inseto, Hematofago => PULGA
Invertebrado, Inseto, Herbivoro => LAGARTA
Invertebrado, Anelideo, Hematofago => SANGUESSUGA
Invertebrado, Anelideo, Onivoro => MINHOCA
*/

var ossos = lines.shift()
var familia = lines.shift()
var alimentacao = lines.shift()

if(ossos[0] === 'v' && familia[0] === 'a' && alimentacao[0] === 'c'){
    console.log('aguia');

}else if(ossos[0] === 'v' && familia[0] === 'a' && alimentacao[0] === 'o'){
    console.log('pomba');

}else if(ossos[0] === 'v' && familia[0] === 'm' && alimentacao[0] === 'o'){
    console.log('homem');

}else if(ossos[0] === 'v' && familia[0] === 'm' && alimentacao[0] === 'h'){
    console.log('vaca');

}else if(ossos[0] === 'i' && familia[0] === 'i' && alimentacao[2] === 'm'){
    console.log('pulga');

}else if(ossos[0] === 'i' && familia[0] === 'i' && alimentacao[2] === 'r'){
    console.log('lagarta');

}else if(ossos[0] === 'i' && familia[0] === 'a' && alimentacao[0] === 'h'){
    console.log('sanguessuga');

}else if(ossos[0] === 'i' && familia[0] === 'a' && alimentacao[0] === 'o'){
    console.log('minhoca');
}