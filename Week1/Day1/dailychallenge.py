#Exercise 1 

user = input("Give me a string")

if len(user) < 10 :
 print ("string not long enough")
elif len(user) > 10 :
 print("string too long")
elif len(user) == 10 :
 print ("perfect string")
 
print (f"the fist and last character: {user [0]} + {user [-1]}")

user_string = ""
for char in user :
 user_string += char 
 print(user_string)
