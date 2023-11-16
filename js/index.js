/* let arr = ["orange", "banana", "apple"];

for (let index in arr) {
    console.log(index + ":" + arr[index]);
}

for (let i=1; i<=10; i++){
    if(i%2===1) continue
    console.log(i);
} */
/* let num=0
for(let i=1; i<1000; i++){
    if(i%2===0){
        num+=1
    }
}
console.log(`짝수의 개수는 ${num}개 입니다.`);


for(let i=1; i<=9; i++){
    for (let j=1; j<=9;j++){
        console.log(`${i}*${j}=${i*j}\n`);
    }
}
 */

for(let i=1; i<10; i++){
    for(let k=0; k<10; k++){
        for(let j=0; j<10; j++){
            let sum = (i**3)+(k**3)+(j**3);
            let current = (i*100) + (k*10)+j;
            if(sum== current){
                console.log(current);
            }
        }
    }
}