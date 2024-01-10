var findContentChildren = function (g, s) {
    let greedOfChildren = g.sort((a, b) => a - b)
    let sizeOfCookie = s.sort((a, b) => a - b)
    let greed = 0;
    let size = 0;
    let contentKids = 0;

    while (greed < greedOfChildren.length && size < sizeOfCookie.length) {
        if (greedOfChildren[greed] <= sizeOfCookie[size]) {
            contentKids++;
            greed++;
            size++;
        } else if (sizeOfCookie[size] < greedOfChildren[greed]) {
            size++
        }
    }
    console.log("i", greed)
    return contentKids
}
console.log(findContentChildren([1, 2, 3], [1, 1]), "\n___")
console.log(findContentChildren([1, 2, 3], [1, 1, 2]), "\n___")
console.log(findContentChildren([1, 2, 3], [1, 2, 3]), "\n___")
console.log(findContentChildren([1, 2], [1, 2, 3]), "\n___")
console.log(findContentChildren([1, 2, 6, 8], [1, 3, 3, 13]), "\n___")