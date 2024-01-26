def lookAroundNeighbours(s, l, r):
    while l >= 0 and r < len(s) and (s[l] == s[r]):
        l -= 1
        r += 1
    return r-l-1


def longestPalindrome(s):
    start = end = 0
    max_l = 0
    for i, ch in enumerate(s):
        len1 = lookAroundNeighbours(s, i, i)  # Odd length palindrome
        len2 = lookAroundNeighbours(s, i, i + 1)  # Even length palindrome

        # Find the longer palindrome length
        current_length = max(len1, len2)

        if max_l < current_length:
            max_l = current_length
            start = i-(current_length-1)//2
            end = i + current_length//2

    print(end, start)
    print(s[start:end+1])


longestPalindrome("baiaoaia")
