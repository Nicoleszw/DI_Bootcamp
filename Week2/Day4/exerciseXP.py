# Exercise 1 

import random

def get_words_from_file(filename="words.txt"):
    
    try:
        with open(filename, "r") as file:
            words = file.read().splitlines()  
        return words
    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found.")
        return []

def get_random_sentence(length):
    words = get_words_from_file()
    if not words:
        return "Error: No words available to generate a sentence."

    random_words = random.sample(words, length)  
    sentence = " ".join(random_words).lower()  
    return sentence

def main():

    print("Welcome to the Random Sentence Generator!")
    print("This program generates a random sentence based on a given length.")

    try:
        length = int(input("Enter the length of the sentence (between 2 and 20 words): "))

        if length < 2 or length > 20:
            print("Error: Please enter a number between 2 and 20.")
            return

        sentence = get_random_sentence(length)
        print("\nHere is your random sentence:")
        print(sentence)

    except ValueError:
        print("Error: Please enter a valid integer.")

if __name__ == "__main__":
    main()

# Exercise 2 

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print(f"Salary: {salary}") 

data["company"]["employee"]["birth_date"] = "1990-05-15"

with open("updated_data.json", "w") as file:
    json.dump(data, file, indent=4)  

print(json.dumps(data, indent=4))
