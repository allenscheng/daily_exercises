address = "665 Clinton Lane, Wilkes Barre, PA 18702"
p address.gsub(/\d/, "_")
p address.gsub(/[0-9]/, "_")
# replaces all instance of a number with a underscore
# .gsub(pattern, replacement)