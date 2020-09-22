/**
 * Definition for singly-linked list.
 
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let l1 = new ListNode();

let l4 = new ListNode(1);

console.log(mergeTwoLists(l1, l4));
