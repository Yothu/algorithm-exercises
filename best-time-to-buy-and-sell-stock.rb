# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

def max_profit(prices)
  best, min, max = 0, prices[0], prices[0]
  
  prices.each do |price|
    if price < min
      min = price
      max = price
    end
    max = price if price > max
    
    best = (max - min) if (max - min) > best
  end
  
  return best
end
