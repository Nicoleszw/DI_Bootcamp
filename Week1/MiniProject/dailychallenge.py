# Challenge 1 : Sorting
# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:
# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

words = input("Enter comma-separated words: ")
sorted_words = ",".join(sorted([word.strip() for word in words.split(",")]))
print(sorted_words)

# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

def longest_word(sentence):
    words = sentence.split() 
    longest = max(words, key=len) 
    return longest

print(longest_word("I have a dog name Luna")) 
print(longest_word("I love programming in Python!")) 
print(longest_word("O’Connor is a great name."))  



