numbers = [1, 2, 4, 2]
p addition = numbers.reduce(0){ |sum, n| sum + n }

# the (0) is the starting value for sum.

# numbers = [1, 2, 4, 2]
# p addition = numbers.reduce(:+)


# numbers = [1, 2, 4, 2]
# p subtraction = numbers.reduce(:+)

# numbers = [1, 2, 4, 2]
# p multiplication = numbers.reduce(:+)

# sum = 0
# numbers.each do |number|
#   sum += number
# end
# p sum