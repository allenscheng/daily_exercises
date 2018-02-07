# 100.times do
#   puts "What is your name?"  
#   name = gets.chomp
#   if name == "Bob"
#     break
#   end
# end

# puts "Hi, Bob!"

count = 1
while count > 0
  puts "What is your name?"
  name = gets.chomp
  unless name != "Bob"
    # the unless condition runs if the condition is false
    # for example, Bob != Bob is false since it does equal
    # Jane != Bob is true so count gets incremented and the question gets asked again
    # and again until false
    # becareful because this could lead to an infinite loop if there's no condition that will be met
    break
  end 
  count += 1
end
puts "Hi, Bob!"