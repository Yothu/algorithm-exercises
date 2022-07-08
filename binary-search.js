// https://leetcode.com/problems/binary-search/

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let pivot = Math.ceil(right / 2);
  
  while(left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (nums[pivot] == target) { return pivot }
    if(nums[pivot] > target) {
      right = pivot - 1;
      continue;
    }
    left = pivot + 1;
  }
  return -1;
};
