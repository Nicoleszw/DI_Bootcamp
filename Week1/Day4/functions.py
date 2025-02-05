#FUNCTIONS

#Syntax

def say_hello():
    print("Hello there!")
say_hello()

#Doc strings: explain the function

def say_bye():
    """prints a str "Bye bye"""
    print("Bye bye")
say_bye()

#Passing information (arguments, parameters) into a function

def say_hello(username):
    print(f"Hello {username}")
say_hello("Harry")

#passing more arguments

def say_hello(username, lenguage):
    if lenguage == "HE":
        print(f"Shalom, {username}")
    elif lenguage == "RU":
        print(f"Private, {username}")
    elif lenguage == "PT":
        print(f"Oi, {username}")
    else:
        print(f"Hello, {username}")

say_hello("Harry", "RU")

#Positional and keyword arguments

def say_hello(username, lenguage):
    if lenguage == "HE":
        print(f"Shalom, {username}")
    elif lenguage == "RU":
        print(f"Private, {username}")
    elif lenguage == "PT":
        print(f"Oi, {username}")
    else:
        print(f"Hello, {username}")

say_hello(10, "Harry") #positional
say_hello(username="Luna", lenguage="PT") #keyword arguments

#Exercise
#Write a function called calculate_total that take two argumrnts:
# price (a number) - the price of a single item.
# quantity (a number) - the number of items.
# print the total

def calculate_total(price, quantity):
    print("Total")

#Default values for arguments 

def say_hello(username:str, lenguage:str = "EN")-> None: 
    if lenguage == "HE":
        print(f"Shalom, {username}")
    elif lenguage == "RU":
        print(f"Private, {username}")
    elif lenguage == "PT":
        print(f"Oi, {username}")
    elif lenguage == "EN":
        print(f"Hello, {username}")
    else:
        print(f"I don´t know that language")

say_hello("George") 

def calculate_total(price, quantity) -> int:
    return price + quantity

# print(type(calculate_total(5,12))) #NoneTupe
# calculate_total(5,12) Nothing is printed
print(calculate_total(5,12))

def fav_colors():
    fav_colors = ["blue", "red", "pink"]
    for color in fav_colors:
        return f"I love {color}"
        print(f"I love{color}")
print(fav_colors())

def fav_colors():
    fav_colors = ["blue", "red", "pink"]
    for color in fav_colors:
        print(f"I love {color}")
    return f"Those are my favourit colors"
print(fav_colors())


def get_country_info(country:str):
    if country == "Israel":
        official_name = "State of Israel"
        capital = "Jerusalem"
        population = 1000000
    if country == "Brazil":
        official_name = "Federal Republic of Brazil"
        capital = "Brazilia"
        population = 216400000
    else:
        print("invalid country")
    
    return official_name, capital, population
print(get_country_info("Brazil"))

official_name, capital, population = get_country_info("Brazil")

print(f"""the official name of Brazil is {official_name} the capital is {capital} and the population is {population}""")

# Global and local Scope 

count_calculation = 100 #global scope

def calculation(a,b, count_calculation):
    # global count_calculation #option: global keyword
    addition = a + b
    substraction = a - b 
    count_calculation += 1 
    return addition, substraction

print(calculation(8,5, count_calculation))
print(count_calculation)

clients = ["George", "Jhon", "Lisa"] #for lists

def welcome(clients:list):
    for client in clients:
      print(f"Welcome {client}")
      clients[0] = "Dave"
    clients.append("Maria")
    
welcome(clients)
print(clients)




