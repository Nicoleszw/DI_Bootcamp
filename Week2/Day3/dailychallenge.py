import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        """Initialize a Circle with either radius or diameter."""
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("You must specify either radius or diameter.")

    def area(self):
        """Calculate the area of the circle."""
        return math.pi * self.radius ** 2

    def __str__(self):
        """String representation of the circle."""
        return f"Circle with radius: {self.radius} and diameter: {self.diameter}"

    def __repr__(self):
        """Representation for debugging."""
        return f"Circle(radius={self.radius})"

    def __add__(self, other):
        """Add two circles and return a new circle with combined radius."""
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        raise TypeError("Can only add Circle objects.")

    def __lt__(self, other):
        """Compare if this circle is smaller than another circle."""
        if isinstance(other, Circle):
            return self.radius < other.radius
        raise TypeError("Can only compare Circle objects.")

    def __le__(self, other):
        """Compare if this circle is smaller than or equal to another circle."""
        if isinstance(other, Circle):
            return self.radius <= other.radius
        raise TypeError("Can only compare Circle objects.")

    def __eq__(self, other):
        """Check if two circles are equal in size."""
        if isinstance(other, Circle):
            return self.radius == other.radius
        raise TypeError("Can only compare Circle objects.")

c1 = Circle(radius=5)
c2 = Circle(diameter=10)  
c3 = Circle(radius=7)

print(c1)  
print(f"Area of c1: {c1.area():.2f}")  

c4 = c1 + c3
print(c4)  

print(c1 < c3)  
print(c1 == c2)  
print(c1 > c3)  

circles = [c3, c1, c4, c2]
sorted_circles = sorted(circles)  
print(sorted_circles)  