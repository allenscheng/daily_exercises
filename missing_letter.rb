def find_missing_letter(str)
  str_split = str.split("")
  first_letter = str_split.first
  last_letter  = str_split.last 
  all_letters = first_letter.upto(last_letter).to_a
  missing_letter = all_letters - str_split
  join_letters = missing_letter.join()

  if join_letters == ""
    return nil
  else
    return join_letters
  end
end








p find_missing_letter("opqrsuv")
p find_missing_letter("xyz") 
p find_missing_letter("ace") 