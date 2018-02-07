def two_largest(array) 
  new_array = []
  index = 0
  index1 = array.length - 1
  array.length.times do 
    if array[index] > array[index1]
      new_array << array[index]
    end
    index += 1
    index1 -= 1
  end
  return new_array
end
p two_largest([1, 7, 30, 9, 14])

  numbers = [1, 7, 30, 9, 14] 
 newarr = []
 numbers.each do |y|
  numbers.select do |x|
    if y > x
     newarr << y
    end
  end
end
p newhash = newarr.each_with_object(Hash.new(0)) { |word,counts| counts[word] += 1 }
newhash.each { |key,value| puts key if value > numbers.length - 3 }