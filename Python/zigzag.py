def convert(s: str, numRows: int) -> str:

    i = 0
    jump = 1
    res = ["" for _ in range(numRows)]
    print(res)
    for ch in s:
        res[i] += ch
        if i == 0:
            jump = 1
        elif i == numRows-1:
            jump = -1
        i += jump
    print(''.join(res))

    # P     I    N
    # A   L S  I G
    # Y A   H R
    # P     I
convert("PAYPALISHIRING", 4)
