let names = [
    "Steven Paul jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lioyd Blankfein"
];


/* names.map((item) => {
    console.log(item.toUpperCase())
}) */

/* let initial = names.map((item) => {
    let splitName = item.split(" ");
    let initial = "";
    splitName.forEach((nameItem) => (initial += nameItem[0]));

    return initial;
    splitName.forEach((nameItem) => (initial += nameItem[0]));
}) */


/* names.filter((item) => {
    if (item.includes("a")) {
        console.log(item);
    }
}); */



/* console.log(names.some((item) => { item.length > 20 })) */


/* let double = names.filter((item) => {
    let splitName = item.split("");
    return splitName.some((letter, index) => letter == splitName[index + 1]);
})

console.log(double); */

console.log(1)

setTimeout(() => {
    console.log(2)
}, 5000);

console.log(3);