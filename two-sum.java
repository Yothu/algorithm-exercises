// https://leetcode.com/problems/two-sum/

class Solution {
    public int[] twoSum(int[] nums, int target) {
      int length = nums.length;
      HashMap<Integer, Integer> hmap = new HashMap<Integer, Integer>();
      
      for (int i = 0; i < length; i += 1) {
        if(hmap.get(target - nums[i]) != null) {
          int[] res = { i, hmap.get(target - nums[i]) };
          return res;
        }
        hmap.put(nums[i], i);
      }
      return null;
    }
}
