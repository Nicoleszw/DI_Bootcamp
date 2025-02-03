#FOR LOOP

# for <variable> in <interable/sequene> : 
  # indentes block of code

#looping on a sequence (list)
fruits = ["apple", "banana", "kiwi", "pear"]

for each_fruit in fruits:
    print(each_fruit)

#lopping on a range of numbers 

#range (start, stop, step)
for i in range(5):
    print(i)

for i in range(1,6):
    print(i)

for i in range(2,10,2):
    print(i)

#enumerate()

fruits1 = ["apple", "banana", "kiwi", "pear"]

for i, each_fruits in enumerate(fruits1):
    if each_fruits == fruits1[3]:
        print("this is the last one")
    print(i, each_fruits)    

for i, each_fruits in enumerate(fruits1):
    if each_fruits == "kiwi":
        fruits1[i] = "lime"
    else:
        print(each_fruits)
print(fruits1)            

#Exercise 
#Accept a number from the user and print its multiplication table

user_number = int(input("Give me a number"))

for i in range(1,11):
    print(user_number * i)

#WHILE LOOPS

i = 0 
while i < 5:
    print(1)
    i += 1 

fruit = ["apple", "banana", "kiwi", "pear"]

i = 0 
while i <len(fruit):
    print(fruit[i])
    i += 1 

pizza_order =[]
max_pizza = 5 

while len(pizza_order) < max_pizza:
    flavor = input("which flavor? (if you finish type done)")

    if flavor == "done":
        print("sucessfully added")
        break

    pizza_order.append(flavor)

while True:
    flavor = input("which flavor? (if you finish type done)")

    if flavor == "done":
        print("sucessfully added")
        print(pizza_order)
        print("we will delivery your pizza in 30min")
        break 

    pizza_order.append(flavor)