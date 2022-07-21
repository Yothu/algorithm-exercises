// https://leetcode.com/problems/maximum-depth-of-binary-tree/

const maxDepth = (root) => {
  if (root == null) return 0;
  
  const left = length(root.left);
  const right = length(root.right);
  
  if (left > right) return left + 1;
  return right + 1;
};

const length = (node) => {
  if (node == null) return 0;
  
  const left = length(node.left);
  const right = length(node.right);
  
  if (left > right) return left + 1;
  return right + 1;  
};
