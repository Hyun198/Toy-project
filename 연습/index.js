// reduce 메서드
//arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
// 배열.reduce(callback(누적값, 현재값, 인덱스, 요소), 초기값);

const arr = [1, 2, 3, 4, 5]

arr.reduce(function (acc, cur, idx) {
    console.log("acc :" + acc, "cur :" + cur, "idx: " + idx);
    return acc + cur;
}, 0);

