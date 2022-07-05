// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
  s = s.match(/\b(\w+)\b/g);
  return s[s.length - 1].length
};
