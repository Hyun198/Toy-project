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


/* const getArr = (arr) => {
    let result=0;
    for(let i=0; i<arr.length; i++){
        if (result<arr[i]){
            result=arr[i];
        }
    }
    return result
}

console.log(getArr([10,50,30])); */

/* let a =10;
(function sum() {
    console.log(`함수 내부: ${a}`);
})(); //즉시 실행 함수
sum();
 */
/* const circle = (r) => {
    return r*r*3.14;
}



const max = (arr) => {
    let result=0;
    for(let i=0; i<arr.length; i++){
        if (result<arr[i]){
            result=arr[i]
        }
    }
    return result;
}

console.log(max([10,50,30])); */


/* const BMI = (height, weight) => {
    let r_height = height / 100;
    let result = weight / (r_height * r_height);
    result = Math.round(result*10)/10;
    console.log(result);
    if (result > 25) {
        return '비만';
    } else if (result > 24 && result <= 25) {
        return '과체중';
    } else if (18.5 < result && result <= 24) {
        return '정상';
    } else {
        return '저체중';
    }
};

console.log(BMI(170, 69)); */


/* const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong"
    },
    age:20,
    likes:["apple","samsung"],
    printHello: function() {
        return "hello";
    }
};*/

/* const studentObj = {
    name: "John",
    age:20,
};
studentObj.gender = "male";
delete studentObj.age;

const email = "test!naver.com";
if(email.indexOf("@") === -1) {
    console.log("올바르지 않은 이메일");
}
 */


/* 
arr.push(50);
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr); */

/* arr.forEach(function(v){
    console.log(v);
}) */

/* const date = new Date();
console.log(date); */

/* function getMaxRandom(max){
    return Math.floor(Math.random()*max)+1;
} //0이상 20이하의 무작위 수

const maxRandom = getMaxRandom(20);
console.log(maxRandom);
 */

const arr = [10,120,30,50,20];

arr.sort(function(a,b){
    if(a<b) return 1;
    else if(a>b) return -1;
    else return 0;
})

console.log(arr[0]);