// https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true

function camelcase(s) {
  let size = s.length;
  let wordCounter = 0;
  
  if (size === 0) return 0;

  wordCounter += 1;
  
  for(let i = 1; i < size ; i += 1) {
    if (s[i] === s[i].toUpperCase()) {
      wordCounter += 1;
    }
  }
  return wordCounter;
 }
