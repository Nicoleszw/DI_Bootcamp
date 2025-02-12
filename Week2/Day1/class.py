# Goal: Create a Book class where each book has a title, author, and year.

class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year
        self.checked_out = False

    def check_out(self):
        if self.checked_out == True:
            print("That book is already checked out")
        else:
            self.checked_out = True
            print(f"You checked out {self.title} successfully")

    def check_in(self):
        self.checked_out = False
        print(f"You checked in {self.title} successfully")

moby_dick = Book("Moby Dick","Herman Melville", 1851)
moby_dick.check_out()

moby_dick.check_out()

moby_dick.check_in()