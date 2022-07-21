// https://leetcode.com/problems/majority-element/

const majorityElement = (nums) => {
  const hash = new Map();
  let maxNumQuan = 0;
  let maxNum = 0;
  
  for (let num of nums) {
    let quan = hash.get(num);
    hash.set(num, quan != undefined ? quan + 1 : 1);
    if (maxNumQuan < hash.get(num)) {
      maxNumQuan = hash.get(num);
      maxNum = num;
    }
  }
  
  return maxNum;
};
