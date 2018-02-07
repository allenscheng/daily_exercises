def mutation?(input, compare)
  key = input.split("") & compare.split("")
  key.length == compare.split("").length
end

p mutation?("burly", "ruby")
p mutation?("burly", "python")

def mutation?(str1, str2)
  result = true
  index2 = 0 
  str2.length.times do
    index1 = 0
    match = false
    str1.length.times do
      if str2[index2] == str1[index1]
        match = true
      end
      index1 += 1
    end
    if match == false
      result = false
    end
    index2 += 1
  end
  return result
end
p mutation?("burly", "ruby")
p mutation?("burly", "bython")