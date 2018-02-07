fruits = [
  {"name" => "apple", "color" => "red"},
  {"name" => "banana", "color" => "yellow"},
  {"name" => "grape", "color" => "purple"}
]
hash_fruits = fruits.map do |index|  
  [index["name"], index["color"]]
end 
p hash_fruits.to_h 
