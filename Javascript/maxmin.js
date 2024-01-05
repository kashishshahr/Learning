// https://hackerrank.com/challenges/angry-children/problem?isFullScreen=true
function maxMin(k, arr) {
    arr.sort((a, b) => a - b)
    let karr = []
    for (let i = 0; i < arr.length - k + 1; i++) {
        karr.push(arr[i + k - 1] - arr[i])
    }

    return karr.reduce((acc, cum) => {
        return Math.min(acc, cum)
    })
}
const arr = [1,
    2,
    3,
    4,
    10,
    20,
    30,
    40,
    100,
    200]
const k = 4;
console.log(maxMin(k, arr))