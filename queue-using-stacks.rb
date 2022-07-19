# https://leetcode.com/problems/implement-queue-using-stacks

class MyQueue
    def initialize()
      @start = []
      @end = []
    end
 
    def push(x)
      return @start.push(x) if @end.length.zero?
      
      num = @end.length
      (1..num).each do
        @start.push(@end.pop)
      end
      @start.push(x)
    end

    def pop()
      return @end.pop unless @end.length.zero?
      
      num = @start.length
      (1..num).each do
        @end.push(@start.pop)
      end
      
      return @end.pop
    end

    def peek()
      return @start[0] if @end.length.zero?

      return @end[@end.length - 1]
    end

    def empty()
      return true if @start.length.zero? && @end.length.zero?

      return false
    end
end

