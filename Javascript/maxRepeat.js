
function fetchMax(a, b) {
    return a > b ? a : b
}
function birthdayCakeCandles(candles) {
    // Write your code here
    // let MAX=-Infinity
    // for(let i=0;i<candles.length;i++)
    // {
    //     MAX=fetchMax(MAX,candles[i]);
    // }
    let MAX = Math.max(...candles)

    // for(let i=0;i<candles.length;i++)
    // {
    //     if(candles[i]===MAX)
    //         count++
    // }
    return candles.reduce((acc, cum) => (cum === MAX ? acc + 1 : acc), 0)
}

console.log(birthdayCakeCandles([1, 4, 4, 2, 0, 10, 10, 22, 22, 1, 2, 3, 4]))
