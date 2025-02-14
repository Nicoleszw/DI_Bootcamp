from anagram_checker import AnagramChecker

def get_user_input():
        while True:
            user_input = input("Give me a word (or 'exit' to finish): ").strip()
            
            if user_input.lower() == "exit":
                return None
            
            if not user_input.isalpha():
                print("Error: Only word allowed.")
                continue

            if " " in user_input:
                print("Error: Only a unic word.")
                continue

            return user_input.upper()

def main():
        checker = AnagramChecker()

        while True:
            user_word = get_user_input()
            if user_word is None:
                print("Leaving the program...")
                break

            if not checker.is_valid_word(user_word):
                print(f"'{user_word}' is not a valid word in English")
                continue

            anagrams = checker.get_anagrams(user_word)
            print("Results:")
            print(f"Your word: {user_word}")
            print("Is a valid word in English")
            print(f"Anagramas funded: {', '.join(anagrams) if anagrams else 'None.'}")
            print("-" * 40)

if __name__ == "__main__":
        main()
