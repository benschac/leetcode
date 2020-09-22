function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// function getNumber(list) {
//   let temp = list;
//   let number = "";
//   while (temp.next) {
//     number += temp.val;
//     temp = temp.next;
//   }

//   number += temp.val;

//   return Number(number);
// }

// function createList(string) {
//   let node = { val: string[string.length - 1], next: new ListNode() };
//   let list = node;
//   for (let i = string.length - 2; i >= 0; i--) {
//     console.log(string[i]);

//     list.next = { val: string[i], next: new ListNode() };
//     list = list.next.next;
//   }

//   return list;
// }

function addTwoNumbers(l1, l2) {
  let head = new ListNode(0);
  let node = head;
  let carry = 0;

  // (2 -> 4 -> 3)
  // (5 -> 6 -> 4)

  while (l1 || l2) {
    let l1Value = l1 ? l1.val : 0;
    let l2Value = l2 ? l2.val : 0;

    let sum = l1Value + l2Value + carry;

    carry = 0;
    let newValue = sum;

    if (sum > 9) {
      newValue = sum % 10;
      carry = 1;
    }

    node.next = new ListNode(newValue);
    node = node.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    node.next = new ListNode(carry);
  }

  return head.next;
}

let l3 = new ListNode(3);
let l2 = new ListNode(4, l3);
let l1 = new ListNode(2, l2);

let l7 = new ListNode(4);
let l6 = new ListNode(6, l7);
let l5 = new ListNode(5, l6);

console.log(addTwoNumbers(l1, l5));
