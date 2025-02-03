#Exercise 1 

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

#Exercise 4 

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

print(len(my_text))

#Exercise 5 

def longest_sentence_game():
    longest_length = 0
    longest_sentence = ""
    
    print("Welcome! Try to enter the longest sentence you can without using the letter 'A'.")
    print("Type 'exit' to quit.")
    
    while True:
        user_input = input("Enter your sentence: ")
        
        if user_input.lower() == "exit":
            print("Goodbye!")
            break
        
        if "a" in user_input.lower():
            print("Oops! Your sentence contains the letter 'A'. Try again!")
            continue
        
        if len(user_input) > longest_length:
            longest_length = len(user_input)
            longest_sentence = user_input
            print(f"Congratulations! You set a new record with {longest_length} characters.")
        else:
            print(f"Nice try! Your longest sentence so far is {longest_length} characters.")

if __name__ == "__main__":
    longest_sentence_game()
