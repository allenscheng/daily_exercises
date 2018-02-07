items = [
  {title: "NoDBA", words: 561, tags: ["nosql", "people", "orm"], type: :book},
  {title: "Infodeck", words: 1145, tags: ["nosql", "writing"], type: :book},
  {title: "OrmHate", words: 1718, tags: ["nosql", "orm"], type: :book},
  {title: "ruby", words: 1313, tags: ["ruby"], type: :article},
  {title: "DDD_Aggregate", words: 482, tags: ["nosql", "ddd"], type: :book}
]
p items.select {|index| index[:type] == :book}.map {|word| word[:words]}.reduce(0){|sum, index| sum + index}
  # the select makes a new array of hashes that have the type "book", 
  # map returns a new array with only the values from the key words,
  # reduce adds each value from the map together