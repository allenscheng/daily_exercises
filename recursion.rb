# @total = 0
# def sum_num(num)
#   if num <= 1000
#     @total += num
#     sum_num(num+1)
#   end
#   return @total 
# end
# p sum_num(1)

def sum_num(num, ar)
  sum_ar = ar
  if num === 1000 
    return sum_ar
  end
  if num <= 1000
    sum_ar += num
    p sum_ar
    sum_num(num + 1, sum_ar)
  end
end
p sum_num(0,0)