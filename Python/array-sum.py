def simpleArraySum(ar):
    res = 0
    for i in range(0, len(ar)):
        res += ar[i]
    return res


print(simpleArraySum([3, 4, 5]))
