# https://leetcode.com/problems/add-two-numbers/description/
# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.
# Example 2:

# Input: l1 = [0], l2 = [0]
# Output: [0]
# Example 3:

# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]

from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode(0)
        tail = head
        carry = 0

        while l1 or l2 or carry != 0:
            d1 = l1.val if l1 is not None else 0
            d2 = l2.val if l2 is not None else 0

            t = d1+d2+carry

            d = t % 10
            carry = t//10

            newNode = ListNode(d)
            tail.next = newNode
            tail = tail.next

            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        tail = head.next
        head.next = None
        head = None

        return tail
