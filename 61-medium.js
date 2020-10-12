/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// function getLastNodeAndRemove(list) {
//   let node;
//   while (list.next) {
//     if (!list.next.next) {
//       node = { val: list.next.val, next: null };
//       list.next = null;
//     } else {
//       list = list.next;
//     }
//   }

//   return node;
// }
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */
// var rotateRight = function (head, k) {
//   if (!head) {
//     return head;
//   }

//   if (!head.next) {
//     return head;
//   }

//   let size = listSize(head);
//   let rotateOverFlow = k % size;

//   if (rotateOverFlow === 0) {
//     return head;
//   }

//   let count = 1;

//   let list = rotate(head);

//   while (count < rotateOverFlow) {
//     list = rotate(list);
//     count++;
//   }

//   return list;
// };

// function rotate(head) {
//   let lastNode = getLastNodeAndRemove(head);
//   lastNode.next = head;
//   return lastNode;
// }

// function printList(list) {
//   while (list.next) {
//     console.log(list.val);
//     list = list.next;
//   }

//   console.log(list.val);

//   return list;
// }

function listSize(list) {
  let size = 1;

  while (list.next) {
    list = list.next;
    size++;
  }

  return size;
}

function getLastNodeAndRemove(list, size, k) {
  let node;
  let remove = size - k;
  let old = list;
  let headNode;
  let count = 1;

  while (list.next) {
    if (count === remove) {
      node = { val: list.next.val, next: list.next.next };
      list.next = null;
      break;
    } else {
      list = list.next;
      count++;
    }
  }

  headNode = node;

  while (node.next) {
    node = node.next;
  }

  node.next = old;
  return headNode;
}

var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }
  if (!head.next) {
    return head;
  }

  let size = listSize(head);

  if (k % size === 0) {
    return head;
  }

  return getLastNodeAndRemove(head, size, k % size);
};

function printList(list) {
  while (list.next) {
    console.log(list.val);
    list = list.next;
  }

  console.log(list.val);

  return list;
}

const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

let rotateList = rotateRight(node1, 12);

printList(rotateList);
