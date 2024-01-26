# Manacher
def longestPalindrome(s):
    # print(s)
    hashed_s = "#" + "#".join(s) + "#"
    p = [0 for _ in range(len(hashed_s))]
    right_border = 0
    max_p = 0
    center = 0
    largest_palindrome_center = 0
    for i in range(len(hashed_s)):
        # print(p)
        mirror = center-(i-center)
        if i < right_border:
            if p[mirror] < right_border-i:
                p[i] = p[mirror]
                continue
            else:
                p[i] = right_border-i

        while i-1-p[i] >= 0 and i+1+p[i] < len(hashed_s) and hashed_s[i-1-p[i]] == hashed_s[i+1+p[i]]:
            p[i] += 1

        if i + p[i] > right_border:
            center = i
            right_border = i+p[i]
        if p[i] > max_p:
            max_p = p[i]
            largest_palindrome_center = i
    start = (largest_palindrome_center-max_p)//2
    return s[start:start+max_p]


print(longestPalindrome("iaiadaiadak"))

# s # i a i a d a i a d a k
# p # 0 0 0 0 0 0 0 0 0 0 0

# s # i a i a d a i a d a k
# p # 1 3 3 1 7 1 7 0 0 0 0
