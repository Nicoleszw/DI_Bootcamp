#Challenge 1
#Ask the user for a number and a length.
#Create a program that prints a list of multiples of the number until the list length reaches length.

user_number = int(input("Give me a number"))
user_length = int(input("Give me a length"))
my_list = []
i = 1

for i in range(1,user_length+1):
    number = i * user_number
    my_list.append(number)
    i += 1 
print(my_list)

#Challenge 2 
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

user_word = input("Give me a word")
new_word = user_word[0] 

for i in range(1, len(user_word)):
    if user_word[i] != user_word[i - 1]: 
        new_word += user_word[i]

print(new_word)
