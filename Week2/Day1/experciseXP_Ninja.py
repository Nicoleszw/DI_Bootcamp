# Exercise 1 : Call History
# Instructions
# Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create an attribute called call_history which value is an empty list.
# Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The method should print a string stating who called who, and add this string to the phone’s call_history.
# Add a method called show_call_history. This method should print the call_history.
# Add another attribute called messages to your __init__() method which value is an empty list.
# Create a method called send_message which is similar to the call method. Each message should be saved as a dictionary with the following keys:
# to : the number of another Phone object
# from : your phone number (also a Phone object)
# content
# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)
# Test your code !!!


class phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call (self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)
    
    def show_call_history(self):
        print("Call History:")
        for call in self.call_history:
            print(call)


    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)  
        other_phone.messages.append(message) 
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")

    def show_outgoing_messages(self):
        print("Outgoing Messages:")
        outgoing = [msg for msg in self.messages if msg["from"] == self.phone_number]
        for msg in outgoing:
            print(f"To {msg['to']}: {msg['content']}")

    def show_incoming_messages(self):
        print("Incoming Messages:")
        incoming = [msg for msg in self.messages if msg["to"] == self.phone_number]
        for msg in incoming:
            print(f"From {msg['from']}: {msg['content']}")

    def show_messages_from(self, other_phone):
        print(f"Messages with {other_phone.phone_number}:")
        messages_with = [msg for msg in self.messages if msg["to"] == other_phone.phone_number or msg["from"] == other_phone.phone_number]
        for msg in messages_with:
            direction = "To" if msg["from"] == self.phone_number else "From"
            print(f"{direction} {msg['to']}: {msg['content']}")

phone1 = phone("123-456-7890")
phone2 = phone("987-654-3210")
phone3 = phone("555-666-7777")

# Making calls
phone1.call(phone2)
phone2.call(phone1)
phone1.call(phone3)

# Display call history
phone1.show_call_history()

# Sending messages
phone1.send_message(phone2, "Hello, how are you?")
phone2.send_message(phone1, "I'm good, thanks!")
phone1.send_message(phone3, "Hey! Long time no see.")
phone3.send_message(phone1, "Yeah! How have you been?")

# Display messages
phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone1.show_messages_from(phone2)
phone1.show_messages_from(phone3)