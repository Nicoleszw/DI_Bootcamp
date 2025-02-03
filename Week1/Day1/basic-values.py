#BASIC VALUES TYPES 
print("Hello world")

#exercise1
print (type(5)) 
print (type(2.52))
print (type("Good Morning"))

print (type(False))
print (5 < 7)
print (5 > 7)
print ("5" == 7)

#Values Types: Integers, Floats, Strings and Booleans

#Strings functions / methods

name = "Juliana"
print(name)
print(name[3])
print(name[3:7])

print(len("Harry Potter"))
print(name[3:len(name)])

#exercise2
my_name = "Nicole"
print(my_name[3])
print(my_name[2])
print(my_name[3:6])

name = "juliana schmidt"
print(name.capitalize())
print(name.title())

my_hp_name = name.replace("schmidt" , "Granger")
print(my_hp_name)

user_name = "!John Doe!"
cleaned_user_name = user_name.strip("!")
print(cleaned_user_name)

price = "$100"
cleaned_price = price.strip("$")
print(cleaned_price)

#Numbers

namee = "Ju"
namee += "u"
print(namee)

user_age = input("What is your age?")
user_age_int = int(user_age)
print(user_age_int + 7)

print("hello world \n" * 4)
print("Hello" + " world")

#exercise3

first_name = "Nicole" 
last_name = "Szwarcberg" 
full_name = first_name + " " + last_name
print(full_name)

#f-string 
print(f"Hello, my name is {first_name} {last_name}")