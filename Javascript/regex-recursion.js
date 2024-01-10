//
function isMatch(s, p) {
    const rows = s.length
    const columns = p.length
    const dfs = (i, j) => {
        if (i >= rows && j >= columns)
            return true
        if (j >= columns)
            return false

        const match = i < rows && (p[j] === "." || p[j] === s[i])

        if (j + 1 < columns && p[j + 1] === "*") {
            return dfs(i, j + 2) || (match && dfs(i + 1, j))
        }

        if (match) {
            return match && dfs(i + 1, j + 1)
        }
        return false
    }
    return dfs(0, 0)
}
//c*a*b
//aab