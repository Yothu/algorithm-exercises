// https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = (s) => {
  const hash = new Map();
  let oddG = false;
  let total = 0;
  
  for (let char of s) {
    let value = hash.get(char);
    hash.set(char, value !== undefined ? value + 1 : 1);
  }
  
  for (let value of hash.values()) {
    let isOdd = (value % 2 != 0);
    if (isOdd && !oddG) oddG = true;
    total += isOdd ? value - 1 : value;
  }
  if (oddG) total += 1;
  return total;
};
