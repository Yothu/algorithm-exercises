// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
  let total = 0;
  
  for(let i = 0; i < s.length ; i += 1) {
    const double = `${s[i]}${s[i+1]}`;
    const single = `${s[i]}`;
    let auxTotal = total;
    total += double == 'CM' ? 900 : 0;
    total += double == 'CD' ? 400 : 0;
    total += double == 'XC' ? 90 : 0;
    total += double == 'XL' ? 40 : 0;
    total += double == 'IX' ? 9 : 0;
    total += double == 'IV' ? 4 : 0;
    if (auxTotal != total) {
      i += 1;
      continue;
    }
    total += single == 'M' ? 1000 : 0;
    total += single == 'D' ? 500 : 0;
    total += single == 'C' ? 100 : 0;
    total += single == 'L' ? 50 : 0;
    total += single == 'X' ? 10 : 0;
    total += single == 'V' ? 5 : 0;
    total += single == 'I' ? 1 : 0;
  }
  return total;
};
