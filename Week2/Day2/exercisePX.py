# Exercise 1

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

bengal_cat = Bengal("Simba", 2)
chartreux_cat = Chartreux("Milo", 3)
siamese_cat = Siamese("Luna", 1)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)

sara_pets.walk()

# Exercise 2

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}!"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}!"
        else:
            return f"It's a tie between {self.name} and {other_dog.name}!"

dog1 = Dog("Rex", 5, 25)
dog2 = Dog("Bolt", 3, 20)
dog3 = Dog("Max", 4, 30)

print(dog1.bark())  
print(dog2.bark())  
print(dog3.bark())  

print(f"{dog1.name}'s running speed: {dog1.run_speed()}")  
print(f"{dog2.name}'s running speed: {dog2.run_speed()}")  
print(f"{dog3.name}'s running speed: {dog3.run_speed()}")  

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))

# Exercise 3 

from pet_dog import PetDog

pet1 = PetDog("Buddy", 4, 30)
pet2 = PetDog("Rocky", 3, 25)
pet3 = PetDog("Charlie", 5, 35)

pet1.train()  

pet1.play(pet2.name, pet3.name)

pet1.do_a_trick()
pet2.do_a_trick()  

pet2.train()
pet2.do_a_trick()

# Exercise 4

class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members  

    def born(self, **kwargs):
        """Adds a new child to the family and prints a congratulatory message."""
        self.members.append(kwargs)
        print(f"Congratulations! A new baby named {kwargs['name']} has been born into the {self.last_name} family!")

    def is_18(self, name):
        """Checks if a family member is 18 or older."""
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False  

    def family_presentation(self):
        """Prints the family's last name and all members' details."""
        print(f"The {self.last_name} Family:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")

family_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Johnson", family_members)

my_family.born(name="Emma", age=0, gender="Female", is_child=True)

print("Is Michael 18 or older?", my_family.is_18("Michael"))  
print("Is Emma 18 or older?", my_family.is_18("Emma"))  

my_family.family_presentation()

# Exercise 5 

class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members  

    def born(self, **kwargs):
        """Adds a new child to the family and prints a congratulatory message."""
        self.members.append(kwargs)
        print(f"Congratulations! A new baby named {kwargs['name']} has been born into the {self.last_name} family!")

    def is_18(self, name):
        """Checks if a family member is 18 or older."""
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False  
    
    def family_presentation(self):
        """Prints the family's last name and all members' details."""
        print(f"The {self.last_name} Family:")
        for member in self.members:
            print(f"  - Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")

class TheIncredibles(Family):
    def use_power(self, name):
        """Prints the power of a member only if they are over 18. Otherwise, raises an exception."""
        for member in self.members:
            if member['name'] == name:
                if member['age'] < 18:
                    raise Exception(f"{name} is not over 18 years old and cannot use their power!")
                print(f"{member['incredible_name']} uses their power: {member['power']}!")

    def incredible_presentation(self):
        """Prints the Incredible family's details, including their superpowers."""
        print("Here is our powerful family!")
        super().family_presentation()  
        for member in self.members:
            print(f"  - Superhero Name: {member['incredible_name']}, Power: {member['power']}")

incredible_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredible_family = TheIncredibles("Incredibles", incredible_members)

incredible_family.incredible_presentation()

incredible_family.born(name="Baby Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="JackJack")

incredible_family.incredible_presentation()

incredible_family.use_power("Michael")  
incredible_family.use_power("Sarah")    

try:
    incredible_family.use_power("Baby Jack")
except Exception as e:
    print(f"Error: {e}")


