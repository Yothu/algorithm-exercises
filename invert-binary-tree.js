// https://leetcode.com/problems/invert-binary-tree

const invertTree = (root) => {
  if (root == null) {
    return root;
  }
  invertTree(root.left);
  invertTree(root.right);
  
  const aux = root.left;
  root.left = root.right;
  root.right = aux;

  return root;
};
