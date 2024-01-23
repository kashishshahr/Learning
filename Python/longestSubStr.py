
def lengthOfLongestSubstring(s: str) -> int:
    map = {}
    j = 0
    count = 0
    max = 0
    for i in range(0, len(s)):
        map[s[i]] = 0
    print(s)
    for i in range(0, len(s)):
        print(map, "\n", i, j)
        map[s[i]] += 1
        print(map, "\n", i, j)
        while map[s[i]] > 1:
            map[s[j]] -= 1
            j += 1
        count = i-j+1
        max = max if max > count else count
        print(map, "\n", i, j, max, "\n")
    print(map, "\n", max)


lengthOfLongestSubstring("abcabcdebb")
