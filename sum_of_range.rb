def sum_of_range(array)
  array.sort!
  sum = 0
  (array[0]..array[1]).each {|n| sum += n}
  return sum 
end
p sum_of_range([1, 4])
p sum_of_range([4, 1])
