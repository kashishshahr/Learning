const getMinimumCost = (noOfFriends, noOfFlowers) => {
    noOfFlowers.sort((a, b) => a - b)
    let n = noOfFlowers.length;
    let tmp = noOfFriends
    let multiplier = 1;
    let i = n - 1;
    let sum = 0;
    while (i >= 0) {
        if (tmp === 0) {
            tmp = noOfFriends
            multiplier++;
        }
        sum += noOfFlowers[i] * multiplier
        tmp--;
        i--;
    }
    return 10
}

console.log(getMinimumCost(3, [2, 5, 6]))

// 3 3
// 2 5 6