// https://leetcode.com/problems/first-bad-version/

var solution = function(isBadVersion) {
    return function(n) {
      let left = 1;
      let rigth = n;
      
      while (left < rigth) {
        let middle = Math.floor(((left + rigth) / 2));

        if (isBadVersion(middle)) {
          rigth = middle;
        } else {
          left = middle + 1;
        }
      }
      return left;
    };
};
