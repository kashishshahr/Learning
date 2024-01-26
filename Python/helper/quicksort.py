

A = [10, 16, 8, 12, 15, 6, 3, 9, 5]


def partition(A, low, high):
    # print(A, low, high)
    pivot = A[low]
    i = low
    j = high

    while i < j:
        while A[i] <= pivot:
            i += 1
        while A[j] > pivot:
            j -= 1

        if i < j:
            A[i], A[j] = A[j], A[i]

    if i > j:
        A[low], A[j] = A[j], A[low]
    return j


def quickSort1(A, l, h):
    print(A, l, h)
    if l < h:
        j = partition(A, l, h)
        quickSort1(A, l, j)
        quickSort1(A, j+1, h)


def quickSort(arr):
    return quickSort1(arr, 0, len(arr)-1)


    # def quickSort(arr):
    #     print(arr)
    #     h = float("inf")
    #     pivot = 0
    #     i = 1
    #     j = len(arr)-1
    #     while i < len(arr)-1 and arr[i] < arr[pivot]:
    #         i += 1
    #     while j > 0 and arr[j] > arr[pivot]:
    #         j -= 1
    #     print(i, j, i > j)
    #     arr[i], arr[j] = arr[j], arr[i]
    #     while i < len(arr)-1 and arr[i] < arr[pivot]:
    #         i += 1
    #     while j > 0 and arr[j] > arr[pivot]:
    #         j -= 1
    #     print(i, j, i > j)
    #     arr[i], arr[j] = arr[j], arr[i]
    #     while i < len(arr)-1 and arr[i] < arr[pivot]:
    #         i += 1
    #     while j > 0 and arr[j] > arr[pivot]:
    #         j -= 1
    #     print(i, j, i > j)
    #     arr[i], arr[j] = arr[j], arr[i]
    #     while i < len(arr)-1 and arr[i] < arr[pivot]:
    #         i += 1
    #     while j > 0 and arr[j] > arr[pivot]:
    #         j -= 1
    #     print(i, j, i > j)
    #     if i > j:
    #         arr[pivot], arr[j] = arr[j], arr[pivot]
    #     print(j, "is partitioning position", "\n", arr)
quickSort(A)
