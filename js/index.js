async function prepare() {
    let start = new Date().getTime();
    while(new Date().getTime() < start + 1000){

    }
    return "finished";
}

console.log("Start!");
prepare().then(console.log);
console.log("1");
prepare().then(console.log);
console.log("2");
prepare().then(console.log);
console.log("3");
console.log("finish!");

