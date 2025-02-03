# TUPLES: immutable and ordered 

numbers = (10, 20, 30, 40, 20, 50, 20)
print(type(numbers))

# numbers[1] = 25  Error, not possible to change an element

print(numbers[1])

#Methods
print(numbers.count(20)) 
print(numbers.index(30))

#Concatenate tuples 
numbers2 = (2,3,5,7)
mixed_tuples = numbers + numbers2
print(mixed_tuples)

students = ["Juliana"]
print(students)

my_tuple = (1,2)
print(type(my_tuple))

#Unpacking a tuple 
a,b,c,d = (5,10,15,20)
print(a)
print(b)
print(c)
print(d)

name, age, email = ("juliana", 27, "ju@gamil.com")
print(name)

#Exercise:

#Expected output:
# a_tuple = (10, 20, 30, 40)
# Your code
# print(a) # should print 10
# print(b) # should print 20
# print(c) # should print 30
# print(d) # should print 40

a_tuple = (10, 20, 30, 40)
a,b,c,d = a_tuple  
print(a)
print(b)
print(c) 
print(d)

#SETS = unordered data stacture 

my_set = {1,2,8,9}
# my_set = set()

my_set.add(12)
my_set.add(55)
print(my_set)

# print(my_set[1]) Error

id_numbers = [123,65,123,978,652,123,6651]
unique_ids = set(id_numbers)
print(unique_ids)

names = {"Juliana", "Israel", "Rafael"}
countries = {"USA", "Brazil", "Israel"}
print(names.intersection(countries))

names_and_countries = names.union(countries)
print(names_and_countries)

print(names.difference(countries))

names.clear()
print(names)

#Exercise 
#Create a set of your five favorit numbers. Write code that:
# Adds a new number to the set (using add())
# Find the common elements between two sets (use a set of your five favorit numbers and set of prime numbers)
# Remove all elements from thee set 

fav_numbers = {23,24,13,28,10}
fav_numbers.add(5)
print(fav_numbers)

prime_numbers = {1,2,23,10}
print(fav_numbers.intersection(prime_numbers))

fav_numbers.clear()
print(fav_numbers)