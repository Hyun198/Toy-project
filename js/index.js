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

/* for(let i=1; i<10; i++){
    for(let k=0; k<10; k++){
        for(let j=0; j<10; j++){
            let sum = (i**3)+(k**3)+(j**3);
            let current = (i*100) + (k*10)+j;
            if(sum== current){
                console.log(current);
            }
        }
    }
} */


/* const gugudan = function gugudan() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            console.log(`${i}*${j}=${i * j}\n`);
        }
    }
} */

/* function gugudan (dan) {
    for (let i=1; i<10; i++){
        console.log(`${dan} * ${i} = ${dan*i}`);
    }
}

gugudan(5); */




/* const sum =(num1, num2)=>num1+num2;  //()없으면 바로 return

const result = sum(1,2);
console.log(result); */


/* function getArrayMaxNumber(arr){
    let max=-214000;
    for(let i of arr){
        if (max<=i){
            max=i;
        }
    }
    return max;
} */

/* const max = getArrayMaxNumber([10,50,30]);
console.log(max); 


function getArr(arr){
    let result=0;
    for(let i =0; i<arr.length; i++){
        if(result<arr[i]){
            result=arr[i];
        }
    }
    return result;
} */


const getArr = (arr) => {
    let result=0;
    for(let i=0; i<arr.length; i++){
        if (result<arr[i]){
            result=arr[i];
        }
    }
    return result
}

console.log(getArr([10,50,30]));