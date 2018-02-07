def reverse_a_string(string)
  rev_string = "" 
  index = string.length - 1
  string.length.times do 
    rev_string += string[index]
    index -= 1
  end
  p rev_string
end
reverse_a_string("abcde")
