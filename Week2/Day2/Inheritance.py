# INHERITANCE (3 types)

# 1- Single inheritance: the derived class is derived from only one base class. 
# 2- Multiple Inheritance: the derived class is derived from more than one base class. 
# 3- Multilevel Inheritance: the derived class is derived from another derived class. 

#Exercise1
class Circle:
    color = "red"

class NewCircle(Circle):
    color = "blue"

nc = NewCircle
print(nc.color) 

#Exercise2
class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)

nc = NewCircle(1)
print(nc.diameter)

nc.grow()

print(nc.diameter)

