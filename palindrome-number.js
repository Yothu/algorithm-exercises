// https://leetcode.com/problems/palindrome-number/
const isPalindrome = (x) => {
  const stringX = x.toString();
  const reverseX = stringX.split("").reverse().join("");
  return stringX == reverseX ? true : false;
};
