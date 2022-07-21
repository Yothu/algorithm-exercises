// https://leetcode.com/problems/ransom-note/

var canConstruct = function(ransomNote, magazine) {
  const hash = new Map();
  const magLen = magazine.length;
  const ranLen = ransomNote.length;
  
  for (let i = 0; i < magLen; i += 1) {
    let val = hash.get(magazine[i]);

    hash.set(magazine[i], val !== undefined ? val + 1 : 1);
  }
  
  for (let i = 0; i < ranLen; i += 1) {
    let quantity = hash.get(ransomNote[i]);

    if (quantity == undefined || quantity == 0) return false;
    hash.set(ransomNote[i], quantity - 1);
  }
  return true;
};
