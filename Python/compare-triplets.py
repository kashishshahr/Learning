def compareTriplets(a, b):
    # Write your code here
    ca = 0
    cb = 0
    for i in range(0, len(a)):
        if a[i] < b[i]:
            ca += 1
        elif a[i] > b[i]:
            cb += 1
    return [cb, ca]


print(compareTriplets([17, 28, 30], [99, 16, 8]))
