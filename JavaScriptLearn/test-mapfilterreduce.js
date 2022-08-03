const arr = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}

const output = arr.map(double);
console.log(output);

const arr2 = [3, 4, 5, 1, 6, 7];


const output2 = arr.filter((x) => x % 2);
console.log(output2);

const output3 = arr.filter((x) => {
    return x % 2 === 0;
});
console.log(output3);

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const output4 = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output4);

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const output5 = arr.reduce(function (acc, curr) {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);

console.log(findMax(arr));
console.log(output5);
