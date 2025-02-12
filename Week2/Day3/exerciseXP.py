# Exercise 1

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        """Returns a string representation of the currency object."""
        return f"{self.amount} {self.currency}{'s' if self.amount > 1 else ''}"

    def __repr__(self):
        """Returns a string representation for debugging purposes."""
        return self.__str__()

    def __int__(self):
        """Returns the integer value of the amount."""
        return self.amount

    def __add__(self, other):
        """Handles addition with another Currency instance or an integer."""
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError("Unsupported type for addition")

    def __iadd__(self, other):
        """Handles in-place addition (+=) with another Currency instance or an integer."""
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, int):
            self.amount += other
        else:
            raise TypeError("Unsupported type for addition")
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))   
print(int(c1))   
print(repr(c1))  

print(c1 + 5)    
print(c1 + c2)   

c1 += 5
print(c1)        

c1 += c2
print(c1)        

try:
    print(c1 + c3)  
except TypeError as e:
    print(e)  

# Exercise 2 

from func import sum_numbers

sum_numbers(10, 5)

# Exercise 3 

import string
import random

def generate_random_string(length=5):
    """Generates a random string of uppercase and lowercase letters of given length."""
    letters = string.ascii_letters  
    return ''.join(random.choice(letters) for _ in range(length))

random_string = generate_random_string()
print(random_string)

# Exercise 4 

import datetime

def display_current_date():
    """Displays the current date in YYYY-MM-DD format."""
    current_date = datetime.date.today()
    print(f"Today's date is: {current_date}")

display_current_date()

# Exercise 5 

import datetime

def time_until_new_year():
    """Displays the amount of time left until January 1st."""
    now = datetime.datetime.now()  
    next_year = now.year + 1  
    new_year_date = datetime.datetime(next_year, 1, 1) 
    
    time_remaining = new_year_date - now  

    days = time_remaining.days
    hours, remainder = divmod(time_remaining.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    print(f"The 1st of January is in {days} days, {hours:02d}:{minutes:02d}:{seconds:02d} hours.")

time_until_new_year()

# Exercise 6 

import datetime

def minutes_lived(birthdate_str, date_format="%Y-%m-%d"):
    """
    Accepts a birthdate string and calculates how many minutes the user has lived.
    
    :param birthdate_str: The birthdate in a string format (default: YYYY-MM-DD).
    :param date_format: The format of the input birthdate string (default: "%Y-%m-%d").
    """
    try:
        birthdate = datetime.datetime.strptime(birthdate_str, date_format)  
        now = datetime.datetime.now() 

        # Calculate time difference
        time_lived = now - birthdate  
        minutes_lived = time_lived.total_seconds() / 60  

        print(f"You have lived approximately {int(minutes_lived):,} minutes.")
    except ValueError:
        print("Invalid date format. Please enter the date in the correct format.")

birthdate = "2000-05-23"  
minutes_lived(birthdate)

# Exercise 7 

