// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  
  let back = 1;
  let up = 1;
  let total = 0;
  
  for(let i = 1; i < n; i += 1) {
    total = up + back;
    back = up;
    up = total;
  }
  return total;
};
