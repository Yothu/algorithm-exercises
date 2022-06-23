// https://leetcode.com/problems/valid-palindrome/submissions/

const isPalindrome = (str) => {  
  const original = str.toLowerCase().replace(/[^0-9a-zA-Z]/g,"");
  const reverse = original.split("").reverse().join("");
  if (original == reverse) {
    return true;
  }
  return false;
};
