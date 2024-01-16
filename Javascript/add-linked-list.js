/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    head = new ListNode(0, null)
    tail = head
    carry = 0
    while (l1 || l2 || carry) {
        d1 = l1 ? l1.val : 0
        d2 = l2 ? l2.val : 0
        t = d1 + d2 + carry

        d = t % 10
        carry = Math.floor(t / 10)
        newNode = new ListNode(d)
        tail.next = newNode
        tail = tail.next
        if (l1)
            l1 = l1.next
        if (l2)
            l2 = l2.next

    }
    return head.next
};
