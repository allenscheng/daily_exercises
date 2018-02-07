def min(array) 
  array.reduce {|min_num, next_num| min_num < next_num ? min_num : next_num}
end
p min([23, 14, 35, 25])