// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(list1, list2) {
  const mergedList = new ListNode();
  let current = mergedList;
  
  while(true) {
    if (list1 == null) {
      current.next = list2;
      break;
    }
    if (list2 == null) {
      current.next = list1;
      break;
    }
    
    if (list2.val <= list1.val) {
      current.next = list2;
      current = current.next;
      list2 = list2.next;
      continue;
    }
    current.next = list1;
    current = current.next;
    list1 = list1.next;
  }
  return mergedList.next;
};
