
//Math.floor() equivalent to ~~

palindrome:

//  121

//  nN=0
//  x=121
//  x>0:
//     nN = (nN*10) + (x%10)
//     x=x/10
// 121>0:
//     0*10 + 121%10 = 1
//     121/10        = 12
// 12>0:
//     1*10 +12%10 = 12
//     12/10       = 1
// 1>0:
//     12*10 + 1%10 = 121
//     1/10         = 0
// 121


var isPalindrome = function (x) {
    if (x < 0 && (x != 0 && (x % 10 === 0))) {
        return false
    }
    const original = x;
    let reverse = 0;
    while (x > 0) {
        const digit = x % 10;
        reverse = (reverse * 10) + (digit)
        x = ~~(x / 10)// or Math.floor()
    }

    console.log(original + " is " + ((original === reverse) ? " " : " not ") + "Palindrome");
}
isPalindrome(121)
isPalindrome(1221)
isPalindrome(1231)
isPalindrome(1331)