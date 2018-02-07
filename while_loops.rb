numbers = [1, 2, 4, 2]
index = 0 
sum = 0

while index < numbers.length
  # while loops continue to run if the condition is true
  # as soon as the condition is false it'll stop 
  sum += numbers[index] 
  index += 1
end 

p sum
