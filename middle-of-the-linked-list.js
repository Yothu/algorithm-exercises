// https://leetcode.com/problems/middle-of-the-linked-list/

const middleNode = (head) => {
  let current = head;
  const arr = [];
  
  while (current) {
    arr.push(current);
    current = current.next;
  }
  
  return arr[Math.floor(arr.length / 2)];
};
