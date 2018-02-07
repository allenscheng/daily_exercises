def find_the_most_letter_a(array) 
  length = array.length
  index1 = 0
  word = ""
  max_count = 0 
  length.times do 
    index2 = 0 
    count = 0 
    array[index1].length.times do
      if array[index1][index2] == "a" 
        count += 1
      end
      index2 += 1
    end
    if count > max_count
      max_count = count
      word = array[index1]
    end
    index1 += 1
  end
  return word
end
p find_the_most_letter_a(["alphabet", "aardvark", "anarchy"])  