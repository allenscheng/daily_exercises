
# numbers = [1, 2, 4, 2]
# sum = 0
# index = 0
# numbers.length.times do
#   number = numbers[index]
#   sum = sum + number
#   index = index + 1
# end
# p sum
# instead of writing the code above to loop through an array,
# the code below is a more simplified version with a .each method

numbers = [1, 2, 4, 2]
sum = 0 
numbers.each {|x| sum += x }
p sum 
# above is a loop that iterates through each element 
# in the numbers array and adds each element to sum 

# the reason an each loop is simplified is because the placeholder between the bars, 
# creates an index variable at 0 and keeps track of the index location and incrementing.

# the flaw of each loop is that we can't skip over certain indexes. 

puts "---"
numbers = [1, 2, 4, 2]
numbers.each {|x| p x += 1}
# above is a loop that iterates through each element 
# in the numbers array, adds one to each element and prints them out