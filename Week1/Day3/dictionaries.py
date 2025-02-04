#DICTIONARIES: data structures  (more complex) becouse 
# ordered and mutable 


user_info = {"name": "Ron", 
             "last_name": "Ewasley",
             "age": 17,
             "address": "Ottery Village -England",
             "family": [("Artur", "Father", 50), ("Molly", "Mother", 48)],
             "hobbies" : ("Quaddrich")
             }
user_info_2 = {"name": "Harry", 
             "last_name": "Potter",
             "age": 20,}

users = {"name": "Ron", 
             "last_name": "Ewasley",
             "age": 17,
             "address": "Ottery Village -England",
             "family": [("Artur", "Father", 50), ("Molly", "Mother", 48)],
             "hobbies" : ("Quaddrich", "Swimming")
             }, {"name": "Harry", 
             "last_name": "Potter",
             "age": 20,}

#Accessing values
print(user_info["name"])
print(user_info["family"][0])

#Exercise 
#Access the value of key history

sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

print(sample_dict["class"]["student"]["marks"]["history"])

# print(sample_dict[0]) KeyError

ids_dict = {0: 123,
            1: 456,
            2: 678}
print(ids_dict[1])

#modify an entry 
user_info["age"] = 18
print(user_info)

#Adding a new entry
user_info["school"] = "Hogwarts"
print(user_info)

#Deleting an entry 
del user_info["school"]
print(user_info)

#In Keyword
print("hobbies" in user_info)
print("birthday" in user_info)

if "birthday" in user_info:
    print(user_info["birthday"])
else:
    print("this key doesn´t exist")
for relative in user_info["family"]:
    print(relative)

#if "birthday" in user_info:
   # print(user_info["birthday"])

# Exercise 1
# Tasks:
# 1 - Change the value of 'age' from 25 to 30.
# 2 - Add a new entry with the key 'occupation' and the value 'Engineer'.
# 3 - Remove the entry with the key 'city'.
# 4 - check if the key 'email' is on the dictionary, if not, add it with value 'name@gmail.com'
# 5 -Loop through the values in the 'hobbies' list and print each hobby on a new line.

student_info = {
    'name': 'John',
    'age': 25,
    'hobbies': ['reading', 'gaming', 'cycling'],
    'city': 'New York'
}

print(student_info)
student_info["age"]= 30
print(student_info)

student_info["occupation"] = "Engineer"
print(student_info)

del student_info["city"]
print(student_info)

if "email" not in student_info:
  student_info["email"] = "name@gmail.com"
print(student_info)

for hobbies in student_info["hobbies"]:
    print(hobbies)

student_info["hobbies"].append("soccer")
print(student_info)

#Built-In methods 
print(user_info.keys())
print(user_info.values())
print(user_info.items())

for value in user_info.values():
    print(value)

for key, value in user_info.items():
    if key == "age":
        user_info["age"] += 5
    print(key,value)

print(user_info)

#Exercise 2 
#Delete set of keys from Python Dictionary


sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for key_remove in keys_to_remove:
    if key_remove in sample_dict.keys():
        del sample_dict[key_remove]
print(sample_dict)

#update method 

car = {
    "brand": "Ford",
    "model": "mustang",
    "year": 1964
}

print(car)
car.update({"model": "mazda",
            "owner": "Jhon",
            "has_ensurance": True,
            "max_speed": 300 })
print(car)

#ZIP = very usful built-in method 

names = ["Lea", "Rafael", "Luka", "Natali"]
power = [150, 500, 187, 209]

friends = dict(zip(names, power))
print(friends)