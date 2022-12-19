let i = 1
let j = 7
let cont = 0

for(i=1; i<=9; j--){
    console.log(`I=${i} J=${j}`);
    cont++
    if(cont === 3){
        cont = 0
        i+=2
        j+=5
    }
}
