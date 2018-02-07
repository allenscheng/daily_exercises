def is_balanced?(str)
  status = false 
  pairs = { '{' => '}', '[' => ']', '(' => ')' }
  index = 0
  rev_index = str.length - 1
  count = str.length / 2
  count.times do 
    if pairs[str[index]] == str[rev_index]
      status = true
    else 
      return status = false 
    end
    index += 1
    rev_index -= 1
  end
  return status 
end
p is_balanced?("{[()]}") #=> true
p is_balanced?("{[([)]]}") #=> false
