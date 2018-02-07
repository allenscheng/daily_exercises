sentences = ["hello", "old friend", "today", "mac and cheese"]
p sentences.map {|index| index.include?(" ") ? index.capitalize : index }