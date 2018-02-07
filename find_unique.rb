def unique(array) 
  unique_hash = {}
  array.each do |index| 
    if !unique_hash[index] 
      unique_hash[index] = 1
    else  
      unique_hash[index] += 1
    end
  end
  return unique_hash.key(1)
end
p unique([1, 1, 2, 2, 3, 4, 4, 5, 5])