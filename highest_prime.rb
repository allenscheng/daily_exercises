def is_prime(num)
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

def highest_prime_number_under(num)
  prime = 2
  for x in 1..num -1
    number_backward = num - x
    if is_prime(number_backward)
      return number_backward 
    end
  end
  return prime
end

p highest_prime_number_under(10)  #=> 7
p highest_prime_number_under(11)  #=> 7
p highest_prime_number_under(12)  #=> 11