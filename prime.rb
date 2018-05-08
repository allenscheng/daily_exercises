# require "prime"
# def is_prime?(n)
#   return Prime.prime?(n)  
# end
# p is_prime?(2)

def is_prime?(num)
  if num < 2
    return false 
  end
  (2..Math.sqrt(num)).each { |i|
    if num % i == 0 
      return false
    end
  }
  true
end
p is_prime?(2)

# def is_prime?(number)
#   (2..number - 1).each do |x|
#     return false if number % x == 0
#   end
#   return true
# end

# p is_prime?(0)