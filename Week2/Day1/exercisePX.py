# Exercise 1
# Instructions
# Using this class
# class Cat:
    #def __init__(self, cat_name, cat_age):
        #self.name = cat_name
        #self.age = cat_age
#Instantiate three Cat objects using the code provided above.
#Outside of the class, create a function that finds the oldest cat and returns the cat.
#Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Whiskers", 3)
cat2 = Cat("Mittens", 5)
cat3 = Cat("Shadow", 2)

def find_oldest_cat(*cats):
    return max(cats, key=lambda cat: cat.age)  
oldest_cat = find_oldest_cat(cat1, cat2, cat3)

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

# Exercise 2 
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

# Define the Dog class
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)

print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

print("\n") 

sarahs_dog = Dog("Teacup", 20)

print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

print("\n") 

if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}.")
else:
    print("Both dogs are the same height.")

# Exercise 3 
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:
# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# Then, call the sing_me_a_song method. The output should be:
# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics 

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()

# Exercise 4 
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
#Example
#{ 
    #A: "Ape",
    #B: ["Baboon", "Bear"],
    #C: ['Cat', 'Cougar'],
    #E: ['Eel', 'Emu']
#}
# Create a method called get_groups that prints the animal/animals inside each group.
# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name  
        self.animals = [] 

    def add_animal(self, new_animal):
        """Adds a new animal to the zoo if it's not already present."""
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        """Prints all the animals in the zoo."""
        print(f"Animals in {self.name}: {', '.join(self.animals)}" if self.animals else "No animals in the zoo yet.")

    def sell_animal(self, animal_sold):
        """Removes an animal from the zoo if it exists."""
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        """Sorts animals alphabetically and groups them by their first letter."""
        self.animals.sort() 
        grouped_animals = {}
        
        for animal in self.animals:
            first_letter = animal[0].upper() 
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)

        self.animal_groups = grouped_animals  
        return grouped_animals

    def get_groups(self):
        """Prints animals grouped by their first letter."""
        if hasattr(self, 'animal_groups'):  
            for letter, group in self.animal_groups.items():
                print(f"{letter}: {group}")
        else:
            print("Please sort the animals first using sort_animals().")


ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Giraffe")

ramat_gan_safari.get_animals()

sorted_groups = ramat_gan_safari.sort_animals()

ramat_gan_safari.get_groups()
