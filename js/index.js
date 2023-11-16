let arr = ["orange", "banana", "apple"];

for (let index in arr) {
    console.log(index + ":" + arr[index]);
}

for (let i=1; i<=10; i++){
    if(i%2===1) continue
    console.log(i);
}