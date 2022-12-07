/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var length = 0;
    var copy = head
    while (copy !== null) {
        copy = copy.next
        length++
    }
    copy = head;
    if (length % 2 === 0) {
        length = length/2 + 1
    } else if (length % 2 !== 0) {
        length = Math.ceil(length/2)
    }
    
    while (length > 1) {
        length--
        copy = copy.next
    }
    return copy
    
    
//     var counter = 0;
//     var result;
//     var middle;
//     if (head !== null) {
//         counter++;
//         head = head.next
//     } 
    
//     if (counter % 2 === 0) {
//         middle = ((counter/2) + 1)
//     } else {
//         middle = Math.ceil(counter/2)
//     }


//     while (middle >= 0) {
//         middle--
//         result = head.next;
//     }
//     return result
};