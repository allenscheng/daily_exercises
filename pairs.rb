# def pairs(array, num) 
#   match_pairs = []
#   array.each do |index|
#     if num == index
#       match_pairs << index
#     elsif num == (index * -1)
#       match_pairs << index
#     end
#   end
#   return match_pairs
# end
# def pairs(array, sum)
#   pair_array = []
#   index1 = 0
#   array.length.times do 
#     index2 = 0
#     array.length.times do
#       if index1 == index2
#       elsif (array[index1] + array[index2]) == sum
#         pair_array << array[index1][index2]
#       end 
#       index2 += 1
#     end
#     index1 += 1
#   end
# end
# p pairs([2, 45, 7, 3, 5, 1, 8, 9], 10)
#[3, 7], [8, 2], [9, 1]
num1 = [1, 2, 3, 4]
arr = []
arr << num1[0, 1]
arr << num1[2, 3]
p arr