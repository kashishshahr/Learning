const url = "https://leetcode.com/problems/zigzag-conversion/description/"
console.log("Zig zag ", url)
// https://leetcode.com/problems/zigzag-conversion/description/
//Description
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

var convert = function (s, numRows) {
    console.log("string:", s)
    console.log("numRows:", numRows)
    if (numRows === 1) {
        return s
    }
    var res = ""
    for (let r = 0; r < numRows; r++) {
        inc = (numRows - 1) * 2
        for (let i = r; i < s.length; i += inc) {
            res += s[i]
            midInc = i + inc - (2 * r);
            if (r > 0 && r < numRows && midInc < s.length) {
                res += s[midInc]
            }
        }
    }
    console.log(res)

}
s = "PAYPALISHIRING"
numRows = [3, 4, 5]
convert(s, numRows[0])
convert(s, numRows[1])
convert(s, numRows[2])







// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// HOW To read first row, so the first character is P, how many jumps to get to I,so a,y,p,a,l,i = 6, any algoriithm to get this value, so what values do we have
// 4 ROWS, so to get to last row, it takes 3 jumps, and to get back to 1st row , it takes 3 jumps, so we are counting 3 i.e. 4-1 R-1
// so as we are doing that twice, i.e. 2(r-1) 

//14 length
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13
// P A Y P A L I S H I R  I  N  G

// 0 + 6 = 6th character, 6 + 6 = 12th character
// P       I                       N



//this works for first and last rows,
//how about middle rows, thats tricky

//2nd row, A to L, we have 4 jumps but L to S there are 2 jumps   although A to S it is 6 character


//3rd row, Y to A, we have 2 jumps but A to H there are 4 jumps     although Y to H it is 6 character


// so algorithm would is you see for every other row,
//to get that missing character, firstly, L i.e. at 4  (6-2)
//to get that missing character, firstly, A i.e. at 2  (6-4)
//we can form a formula that is, i is index of row
// (((r-1)*2)-2.i)
//6-2.1=4
//6-2.2=2