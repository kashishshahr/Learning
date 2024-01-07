//https://leetcode.com/problems/reverse-integer/description/
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
function wouldExceedLimit(rev, digit) {
    const maxLimit = Math.floor(2 ** 31 / 10)
    const minLimit = -maxLimit;
    if (rev < 0)
        return rev === minLimit ? digit < -8 : rev < minLimit
    return rev === maxLimit ? digit > 7 : rev > maxLimit
}

var reverse = function (x) {


    let rev = 0;

    while (x !== 0) {

        const digit = x % 10
        if (wouldExceedLimit(rev, digit))//[-231, 231 - 1], then return 0.
            return 0
        rev = (rev * 10) + digit
        x = ~~(x / 10);
    }


    return rev
};
console.log(reverse(12001200120012))