

def partition(A, l, h):
    pivot = A[l]
    i = l
    j = h

    while i < j:
        while A[i] <= pivot:
            i += 1
        while A[j] > pivot:
            j -= 1
        if i < j:
            A[i], A[j] = A[j], A[i]
    if i > j:
        A[l], A[j] = A[j], A[l]

    return j


def quickSort(A, l, h):
    print(A, l, h)
    if l < h:
        pivot = partition(A, l, h)
        quickSort(A, l, pivot)
        quickSort(A, pivot+1, h)
    return A


def sort(A):
    return quickSort(A, 0, len(A)-1)


A = [10, 16, 8, 12, 15, 6, 3, 9, 5]
print(sort(A))
