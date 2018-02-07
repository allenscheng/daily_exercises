
def average(input_num)
  index = 0
  sum = 0

  input_num.each {|num| sum += num }
  return sum.to_f / input_num.length
end
p average([2, 1, 7, 5])

def average(input_num)
  index = 0
  sum = 0

  while index < input_num.length
    sum += input_num[index]
    index += 1
  end
  return sum.to_f / input_num.length
end 
p average([2, 1, 7, 5])
