def find_longest_word(string)
  words = string.split(" ")
  longest_length = 0
  longest_word = "" 
  index = 0
  words.length.times do 
    if words[index].length > longest_length 
      longest_length = words[index].length 
      longest_word = words[index]
    end
    index += 1
  end 
  return longest_word
end 
p find_longest_word("What is the longest word in this phrase?")

# def find_longest_word(string)
#   words = string.split(" ")
#   p ordered_words = words.sort_by{|x| x.length}.reverse
#   return ordered_words.first
# end
# puts find_longest_word("What is the longest word in this phrase?")
#displays last in sentence if there's a tie