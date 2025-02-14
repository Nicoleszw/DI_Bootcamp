from datetime import date

class Person:
    def __init__(self, name, birthday):
        self.name = name
        self.birthday = birthday

    @property #getter
    def birthday(self):
        return self._birthday
    
    @birthday.setter #setter
    def birthday(self, value):
        if not isinstance(value, date):
            raise ValueError ("Birthday argument has to bo a datetime object")
        self._birthday = value

    def lived_days(self):
        return(date.today() - self.birthday).days
    
p1 = Person("John Doe", date(1999,5,5))
print(type(p1.birthday))


#print(p1.lived_days())
