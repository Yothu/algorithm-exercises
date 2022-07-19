# https://leetcode.com/problems/linked-list-cycle

def hasCycle(head)
  return false if head == nil

  node = head
  hash = Hash.new

  while true
    return false if node.next == nil
    return true if hash[node.object_id] == true
    
    hash[node.object_id] = true if hash[node.object_id] == nil
    node = node.next
  end
end
