// https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
  for(let i = digits.length - 1; i >= 0; i -= 1){
    if(digits[i] !== 9){
      digits[i] = digits[i] + 1;;
      break;
    }
    digits[i] = 0;
    if(i == 0){
       digits.unshift(1);
    }
  }
  return digits;
};
