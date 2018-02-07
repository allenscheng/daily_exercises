def split_array(array, num)
  return array.each_slice(num).to_a
end
p split_array([0, 1, 2, 3, 4, 5], 2)
p split_array([0, 1, 2, 3, 4, 5], 3)