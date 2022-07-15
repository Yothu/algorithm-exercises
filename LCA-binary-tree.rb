# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

def lowest_common_ancestor(root, p, q)
  if p.val < root.val && q.val < root.val # Left
    return lowest_common_ancestor(root.left, p , q)
  end
  if p.val > root.val && q.val > root.val # Right
    return lowest_common_ancestor(root.right, p , q)
  end
  return root
end
