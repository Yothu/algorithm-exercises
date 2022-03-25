// Solution to the hackerrank problem in this link:
// https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function simpleArraySum(ar) {
  let total = 0;
  for(let i = 0;i < ar.length;i++){
      total += ar[i];
  }
  return total;
}
