// This is the answer to HackerRank's exercise:
// https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true

function findDigits(n) {
  let varNum = n;
  let count = 0;
 
  while (varNum > 0) {
    let decimal = varNum % 10;
    if (n % decimal === 0) {
      count += 1;
    }
    varNum = Math.floor(varNum / 10);
  }
  return count;
}
