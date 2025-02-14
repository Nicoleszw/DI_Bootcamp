#Part 1 

## Class – A blueprint for creating objects with attributes and methods.
## Instance – A specific object created from a class.
## Encapsulation – Hiding data and restricting direct access to it.
## Abstraction – Hiding implementation details and showing only essential features.
## Inheritance – A class acquiring properties and methods from another class.
## Multiple Inheritance – A class inheriting from multiple parent classes.
## Polymorphism – Different classes having methods with the same name but different implementations.
## Method Resolution Order (MRO) – The order in which Python looks for a method in an inheritance hierarchy.

#Part 2

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    def __init__(self):
        self.shuffle()  

    def shuffle(self):
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]
        random.shuffle(self.cards)

    def deal(self):
        return self.cards.pop() if self.cards else None

deck = Deck()
print(deck.deal())  
print(deck.deal())  
print(len(deck.cards))  
