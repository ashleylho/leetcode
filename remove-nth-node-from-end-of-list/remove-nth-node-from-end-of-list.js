/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let tail = head
    let remove = head
    let previous = dummy
    while (n > 0) {
        tail = tail.next
        n--
    }
    while (tail) {
        tail = tail.next
        previous = remove
        remove = remove.next
    }
    previous.next = remove.next
    return dummy.next
};