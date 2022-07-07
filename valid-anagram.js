// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
  const letters = new Map();
  let count = 0;
  
  for(let i = 0; i < s.length; i += 1) {
    if (letters.get(s[i]) == undefined) {
      letters.set(s[i], 1);
      count += 1;
      continue;
    }
    letters.set(s[i], letters.get(s[i]) + 1);
  }
  
  for(let j = 0; j < t.length; j += 1) {
    if (letters.get(t[j]) == undefined) {
      return false;
    }
    letters.set(t[j], letters.get(t[j]) - 1);
    if (letters.get(t[j]) == 0) {
      count -= 1;
    }
  }
  if (count == 0) {
    return true;
  }
  return false;
};
