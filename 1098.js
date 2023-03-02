let i = 0
let j = 1
let cont = 0

for(i=0; i<=2; j++){
    if(i === 0 || i === 1 || i >= 1.9){
        console.log(`I=${Math.round(i)} J=${Math.round(j)}`);
    }else{
        console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`);
    }
    cont++
    if(cont === 3){
        cont = 0
        i+=0.2
        j+=0.2 - 3
    }
}
