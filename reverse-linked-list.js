// https://leetcode.com/problems/reverse-linked-list/

const reverseList = (head) => {
  if (head == undefined) return head;

  const array = [];
  let current = head;
  
  while (current) {
    array.push(current);
    current = current.next;
  }
  
  const newHead = array.pop();
  let newCurrent = newHead;
  
  while (array.length > 0) {
    newCurrent.next = array.pop();
    newCurrent = newCurrent.next;
    newCurrent.next = null;
  }
  
  return newHead;
};
