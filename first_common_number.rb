def first_common(array) 
  common_hash = {}
  common_array = []
  array.each do |index| 
    if !common_hash[index]
      common_hash[index] = 1
    else
      common_hash[index] += 1
      common_array << index 
    end
  end
  return common_array[0]
end
p first_common([10, 5, 3, 4, 3, 5, 6])