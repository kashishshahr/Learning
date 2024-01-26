def findMedianSortedArrays(nums1, nums2) -> float:
    if len(nums2) < len(nums1):
        return findMedianSortedArrays(nums2, nums1)
    else:
        m = len(nums1)
        n = len(nums2)
        low = 0
        high = m
        while low <= high:
            partitionX = (low + high) // 2
            partitionY = ((m + n + 1) // 2) - partitionX

            maxLeftX = float(
                "-inf") if partitionX == 0 else nums1[partitionX - 1]
            minRightX = float(
                "inf") if partitionX == m else nums1[partitionX]
            maxLeftY = float(
                "-inf") if partitionY == 0 else nums2[partitionY - 1]
            minRightY = float(
                "inf") if partitionY == n else nums2[partitionY]

            if maxLeftX <= minRightY and minRightX >= maxLeftY:
                if (m + n) % 2:
                    return maxLeftX if maxLeftX > maxLeftY else maxLeftY
                else:
                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
            elif maxLeftX > minRightY:
                high = partitionX - 1
            else:
                low = partitionX + 1


print(findMedianSortedArrays([1, 3], [2]))
print(findMedianSortedArrays([1, 3], [2, 4]))
