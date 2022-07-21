// https://leetcode.com/problems/diameter-of-binary-tree/

}const diameterOfBinaryTree = (root) => {
  const length = (node) => {
    if (node == null) return 0;
  
    const left = length(node.left);
    const right = length(node.right);
  
    if ((left + right) > top) top = (left + right);
    if (left > right) return left + 1;
    return right + 1;
  };
  
  if (root == null) return 0;
  var top = 0;
  
  const left = length(root.left);
  const right = length(root.right);
  
  if (top > (left + right)) return top;
  return left + right;
};
