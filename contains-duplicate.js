// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (nums) => {
  const hash = new Map();
  
  for (let num of nums) {
    if (hash.get(num) != undefined) return true;
    
    hash.set(num, true);
  }
  return false;
};
