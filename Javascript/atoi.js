var myAtoi = function (s) {

    let i = 0;
    let sign = 1;
    let n = s.length
    let result = 0;
    const MAX_VALUE = 2147483648 - 1
    const MIN_VALUE = -2147483648
    while (i < n && s[i] === " ") i++

    if (s[i] === "+")
        i++
    else if (s[i] === "-") {
        sign = -1;
        i++;
    }
    while (i < n && (s[i] >= '0' && s[i] <= '9')) {
        const digit = s[i] - '0'
        if (result > ~~(MAX_VALUE / 10) || (result === ~~(MAX_VALUE / 10)) && digit > MAX_VALUE % 10) {
            return sign === 1 ? MAX_VALUE : MIN_VALUE
        }
        result = result * 10 + digit
        i++
    }

    return result * sign


}
console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("0-4193"))
console.log(myAtoi("0-4193a"))
console.log(myAtoi("-0-4193a"))