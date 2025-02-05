# Exercise 1
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message():
    print("I´m learning python!")
display_message()


# Exercise 2 
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    return print(f"One of my favorite books is {title}")

favorite_book("Alice in Wonderland")

# Exercise 3 
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

def describe_city(country, city):
    country = "Israel"
    return print(f"{city} is in {country}")

describe_city("Israel", "Ramat Gan")

# Exercise 4
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random

def guess_number(user_number):
    if not (1 <= user_number <= 100):
        print("Please enter a number between 1 and 100.")
        return

    random_number = random.randint(1, 100) 

    if user_number == random_number:
        print("You guessed the correct number!")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

user_input = int(input("Enter a number between 1 and 100: "))
guess_number(user_input)


# Exercise 5 
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.
# Bonus: Call the function make_shirt() using keyword arguments.


def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt("M", "I love NY")

# Exercise 6 
# Instructions
# Using this list of magician’s names
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magician_names:list):
        print(magician_names)

show_magicians(magician_names)

def make_great(magician_names:list):
    for names in magician_names:
        print(f"The Great {names}")

make_great(magician_names)

# Exercise 7 
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.
# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# elow zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40
# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

import random

def get_random_temp():
    random_number = random.randint(-10, 40)
    return random_number

get_random_temp()

def main():
    random_number = get_random_temp()
    print(f"The temperature right now is {random_number} degrees Celsius.")
    if random_number < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0<= random_number <= 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16< random_number <= 23:
        print("Nice weather!")
    elif 24< random_number <= 32:
        print("Don´t forgot the sun cream")
    else:
        print("Today is a very hot day!")

main()

# Exercise 8 
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
# Here is an array of dictionaries, containing those questions and answers
# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
#Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
#If he had more then 3 wrong answers, ask him to play again.

def star_wars_quiz():
    data = [
        {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
        {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
        {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
        {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
        {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
        {"question": "What species is Chewbacca?", "answer": "Wookiee"}
    ]

    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        user_answer = input(f"{item['question']} ").strip()
        if user_answer.lower() == item['answer'].lower():  
            print("Correct!")
            correct += 1
        else:
            print(f"Wrong! The correct answer is: {item['answer']}\n")
            incorrect += 1
            wrong_answers.append({"question": item['question'], "your_answer": user_answer, "correct_answer": item['answer']})

    print("Quiz Results:")
    print(f"Correct answers: {correct}")
    print(f"Incorrect answers: {incorrect}")

    if wrong_answers:
        print("Here are the questions you got wrong:")
        for mistake in wrong_answers:
            print(f"{mistake['question']}")
            print(f"Your answer: {mistake['your_answer']}")
            print(f"Correct answer: {mistake['correct_answer']}\n")
    if incorrect > 3:
        replay = input("You got more than 3 wrong! Do you want to try again? (yes/no): ").strip().lower()
        if replay == "yes":
            star_wars_quiz()
            
star_wars_quiz()





