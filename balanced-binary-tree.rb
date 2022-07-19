# https://leetcode.com/problems/balanced-binary-tree

def is_balanced(root)
  return true if root.nil?  
  
  return false if height(root.left) == false
  
  return false if height(root.right) == false
  
  return true if (height(root.left) - height(root.right)).abs <= 1
  
  return false
end

def height(node)
  return 0 if node.nil?
  
  left = height(node.left)
  right = height(node.right)
  
  return false if left == false || right == false
  
  bigger = left
  bigger = right if bigger < right
  
  return false if (left - right).abs > 1
  
  return bigger + 1
end
