# LISTS

my_name = "Jack"
hello = "Hello World"
my_age = 27
my_list = [my_name, my_age, hello]

#List syntax
numbers = [1,2,3,47,9]
print(numbers)

#order data stracture = we can use idex 
print(numbers[3])

#mutable = I can change it 
numbers[3] = 55 
print(numbers)

#list methods
students = ["Harry" , "Ron" , "Hermione"]
students.append("Luna")

print(students)

students.insert(1, "Ginny")
print(students)

students.remove("Ron")
print(students)

students.append("Ginny")
print(students)

students.pop() #remove the last element 
print(students)

students.pop(1) #remove the element you select 
print(students)

#Exercise 
#Given this list:
#list1 = [5, 10, 15, 20, 25, 50, 20]
# 1- print index 3 
# 2- change 50 to 70
# 3- delete number 20 (first apperance)
# 4- add a new number to the end of the list 

list1 = [5, 10, 15, 20, 25, 50, 20]
print(list1)

print(list1[3])

print(list1.index(50))
list1[list1.index(50)] = 70 
print(list1)

list1.remove(20)
print(list1)

list1.append(45)
print(list1)

#methods to check after the class
# copy()
# extend()
# clear()
# sort()
# sorted() organice in the correct order 




