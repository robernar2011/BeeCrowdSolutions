for(i=1, j=7; i<=9; j-=1){
    console.log(`I=${i} J=${j}`);
    if(j === 5){
        j = 8
        i+=2
    }
}