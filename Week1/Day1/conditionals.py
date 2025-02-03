#my_city = "Ramat Gan"

#if my_city == "Ramat Gan" :
#    print(f"I love {my_city}")

#print("Finish")

#user_name = input("What is your name?")

#if user_name == "Nicole" :
# print("we have the same name!")
#elif user_name == "Daniel" : 
 #print("Beatiful name!")
#else :
 #print("We have differnet names")

#exercise

number = input("Give me a number between 1 to 100:")

if int(number) % 3 == 0 and int(number) % 5 != 0 :
 print("Fizz")
elif int(number) % 5 == 0 and int(number) % 3 != 0 :
 print("Buzz")
elif int(number) % 3 == 0 and int(number) % 5 == 0 :
 print("FizzBuzz")
