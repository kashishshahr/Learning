//till today fastest
function isMatch(s, p) {
    const dp = Array.from({ length: s.length + 1 }, () =>
        Array(p.length + 1).fill(false)
    );

    dp[0][0] = true;

    for (let i = 0; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] =
                    dp[i][j - 2] ||
                    (i > 0 &&
                        (s[i - 1] === p[j - 2] || p[j - 2] === '.') &&
                        dp[i - 1][j]);
            } else {
                dp[i][j] =
                    i > 0 &&
                    dp[i - 1][j - 1] &&
                    (s[i - 1] === p[j - 1] || p[j - 1] === '.');
            }
        }
    }

    return dp[s.length][p.length];
}
