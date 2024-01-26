def palin(s):
    if s == s[::-1]:
        return s
    start, size = 0, 1
    for i in range(1, len(s)):
        l, r = i - size, i + 1
        s1 = s[l - 1:r]
        print(l, r, s1, s1[::-1], s[l:r])
        if l >= 1 and s1 == s1[::-1]:
            size += 2
            start = l - 1
        else:
            s2 = s[l:r]
            if s2 == s2[::-1]:
                size += 1
                start = l
    return s[start: start + size]


print(palin('iaiadaiadak'))
