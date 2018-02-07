def double_numbers(input_array)
  double_array = []

  input_array.each {|num| double_array << num * 2}

  p double_array
end
double_numbers([2, 4, 6, 8])