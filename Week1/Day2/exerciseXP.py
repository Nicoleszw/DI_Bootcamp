#Exercise 1 Favorite numbers
#Instructions
#Create a set called my_fav_numbers with all your favorites numbers.
#Add two new numbers to the set.
#Remove the last number.
#Create a set called friend_fav_numbers with your friend’s favorites numbers.
#Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {2,3,5,9,13,23,24,28}
print(my_fav_numbers)

my_fav_numbers.add(1)
my_fav_numbers.add(30)
print(my_fav_numbers)

friend_fav_numbers = {13,4,21,55,18}

our_fav_numbers = my_fav_numbers.intersection(friend_fav_numbers)
print(our_fav_numbers)

#Exercise 2 
#Instructions
#Given a tuple which value is integers, is it possible to add more integers to the tuple?

my_tuple = (1, 2, 3)
my_tuple = my_tuple + (4, 5, 6)
print(my_tuple)  
#you cannot modify an existing tuple, you can create a new tuple that includes additional values.

#Exercise 3 
#Instructions
#Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
#Remove “Banana” from the list.
#Remove “Blueberries” from the list.
#Add “Kiwi” to the end of the list.
#Add “Apples” to the beginning of the list.
#Count how many apples are in the basket.
#Empty the basket.
#Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
print(basket)

basket.remove("Blueberries")
print(basket)

basket.append("kiwi")
print(basket)

basket.insert(1, "Apples")
print(basket)

print(basket.count("Apples"))

basket.clear()
print(basket)

#Exercise 4 
#Instructions
#Recap – What is a float? What is the difference between an integer and a float?
#Create a list containing the following sequence of floats and integers (it should be a list with mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
#Can you think of another way to generate a sequence of floats?

## A float is a number that has a decimal point.
## Difference Between an Integer and a Float:
## Integer (int): Whole numbers (e.g., 1, 2, 3, 4)
## Float (float): Numbers with decimal points (e.g., 1.5, 3.1)
mixed_list = [x / 2 for x in range(3, 11)] 
print(mixed_list) 


#Exercise 5 
#Instructions
#Use a for loop to print all numbers from 1 to 20, inclusive.
#Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for i in range(1,21): 
    print(i)
for index in range(1, 20, 2):  
    print(index + 1)  

#Exercise 6 
#Instructions
#Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

user_name =[]
my_name = "Nicole"

while user_name != my_name:
    name = input("What is your name?")

    if name == "Nicole":
        print("we have the same name!")
        break

#Exercise 7
#Instructions
#Ask the user to input their favorite fruit(s) (one or several fruits).
#Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
#Store the favorite fruit(s) in a list (convert the string of words into a list of words).
#Now that we have a list of fruits, ask the user to input a name of any fruit.
#If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
#If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

fav_fruites = []
fav_fruites_string = input("Give me your favorite fruites, with a space in between")
fav_fruites = fav_fruites_string.split()
new_input = input("Give me a new fruit")
if new_input in fav_fruites:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")

#Exercise 8 
#Instructions
#Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
#As they enter each topping, print a message saying you’ll add that topping to their pizza.
#Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

pizza_topping =[]
topping = ""

while True:
    topping = input("which topping? (if you finish type quit)")
    if topping == "quit":
        print("sucessfully added")
        print(pizza_topping)
        cost = 10 + (2.5*len(pizza_topping))
        print(cost)
        break
    pizza_topping.append(topping)


#Exercise 9 
#Instructions
#A movie theater charges different ticket prices depending on a person’s age.
#if a person is under the age of 3, the ticket is free.
#if they are between 3 and 12, the ticket is $10.
#if they are over the age of 12, the ticket is $15.
#Ask a family the age of each person who wants a ticket.
#Store the total cost of all the family’s tickets and print it out.
#A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
#Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
#At the end, print the final list.

ages = []
user_age = input("How old are you?")
ages = user_age.split()
cost = 0
 
for i in range(len(ages)):
    if int(ages[i]) < 3:
        cost += 0
    elif 3<int(ages[i])<12:
        cost += 10
    else:
        cost += 15
print(f'you need to pay{cost}')

teen_names = input("Enter the names of teenagers coming to the movie (separated by spaces): ")
teen_names_list = []
teen_names_list = teen_names.split()
allowed_viewers = [] 

for teen in teen_names_list:
   ages = int(input(f"Enter the age of {teen}: ")) 

   if 16 <= ages <= 21:
      print(f"{teen} is not allowed to watch this movie and will be removed.")
   else:
        allowed_viewers.append(teen)

print(f"Final list of allowed viewers: {allowed_viewers}")


# Exercise 10 
# Instructions
# Using the list below :
# andwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made. 

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

i = 0 
while i < len(sandwich_orders):
   if "Pastrami" in sandwich_orders[i]:
      sandwich_orders.pop(i)
      i += 1
   else:
      i += 1 
      pass
print(sandwich_orders)

finished_sandwiches = [] 

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)    
    finished_sandwiches.append(current_sandwich)

print(finished_sandwiches)

