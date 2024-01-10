var isMatch = function (s, p) {
    const rows = p.length
    const columns = s.length
    if (rows === 0 && columns === 0)
        return true
    if (columns === 0) {
        return false;
    }

    const cache = Array.from({ length: p.length + 1 }, () =>
        [false]
    );

    console.log(cache, "\n")
    for (let i = 0; i <= rows; i++)
        for (let j = 0; j <= columns; j++) {

            if (i == 0 && j == 0) {
                cache[i][j] = true
            } else if (i == 0) {
                cache[0][j] = false
            } else if (j == 0) {
                const pc = p[i - 1]
                if (pc === "*")
                    cache[i][0] = cache[i - 2][j]
                else
                    cache[i][j] = false
            } else {

                const pc = p[i - 1]
                const sc = s[j - 1]
                if (pc === "*") {

                    cache[i][j] = cache[i - 2][j]
                    const plsc = p[i - 2]
                    if (plsc === sc || plsc === ".")
                        cache[i][j] = cache[i][j] || cache[i][j - 1]

                } else if (pc === "." || pc === sc) {
                    cache[i][j] = cache[i - 1][j - 1]
                }
                else {
                    cache[i][j] = false
                }

            }
        }
    return cache[rows][columns]
}
console.log(isMatch("aab", "c*a*b"))

//      ''  a   a   b
//''    t   f   f   f     
//c     f   f   f   f
//*     t   f   f   f 
//a     f   t   f   f
//*     t   t   t   f
//b     f   f   f   t

