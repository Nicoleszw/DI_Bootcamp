# Args and Kwargs

# *Args: Not defined quantity of arguments 

def calculation(*args):
   return sum(args)

print(calculation(1, 5, 3, 7))

# **Kwargs
# k- key, w- words, args- arguments

def get_user_info(**kwargs):
    print(kwargs)

get_user_info(name = "Jhon", last_name = "Doe", age = 45, occupation = "Engenieer")


# Args and Kwargs Together 

def check(a, *numbers, **person):
    print('Greetings : ', a)

    #iterate through all the items in tuple
    for num in numbers:
        print('num - ', num)

    #iterate through all the items in dictionary    
    for key, value in person.items():
        print(key + ': ' + value)

check("hello", 1,2,3,name="John",surname="Doe")


