//
function isMatch(s, p) {
    const rows = s.length
    const columns = p.length
    const cache = Array.from({ length: rows + 1 }, () => [false])
    const dfs = (i, j) => {
        if (cache[i][j])
            return cache[i][j]

        if (i >= rows && j >= columns)
            return true
        if (j >= columns)
            return false

        const match = i < rows && (p[j] === "." || p[j] === s[i])

        if (j + 1 < columns && p[j + 1] === "*") {
            cache[i][j] = dfs(i, j + 2) || (match && dfs(i + 1, j))
            return cache[i][j]
        }
        if (match) {
            cache[i][j] = match && dfs(i + 1, j + 1)
            return cache[i][j]
        }
        cache[i][j] = false
        return false
    }
    return dfs(0, 0)
}
//c*a*b
//aab