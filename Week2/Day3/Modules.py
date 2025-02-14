class Animal:
    def walk(self):
        return f"this animal is walking"
    
# Some function (not method)
def addition(a,b):
    return a+b
    
if __name__ == "__main__":
    
    animal = Animal()
    print(animal.walk())


@property #also called getter 
def balance(self):
    return self._balance

@balance.setter 
def balance(self, value):
    self._balance = value
    return self

@classmethod #a method related to the class (not the object)
def get_next_available_num(cls):
    return cls.ACCOUNT_AVAILBLE_NUMBER

@staticmethod #a method that within the class but doesn´t self(object)
def conversion(amount, rate):
    return amount * rate