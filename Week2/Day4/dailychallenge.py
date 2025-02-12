import re
from collections import Counter

class Text:
    def __init__(self, text: str):
        self.text = text
        self.words = re.findall(r'\b\w+\b', text.lower())  
    
    def word_frequency(self, word: str):
        """Returns the frequency of a word in the text."""
        word = word.lower()
        count = self.words.count(word)
        return count if count > 0 else f'Word "{word}" not found in text.'
    
    def most_common_word(self):
        """Returns the most common word in the text."""
        if not self.words:
            return "No words in text."
        return Counter(self.words).most_common(1)[0][0]
    
    def unique_words(self):
        """Returns a list of unique words in the text."""
        return list(set(self.words))
    
    @classmethod
    def from_file(cls, filename):
        """Creates a Text instance from a text file."""
        try:
            with open(filename, 'r', encoding='utf-8') as file:
                text = file.read()
            return cls(text)
        except FileNotFoundError:
            print(f"Error: The file '{filename}' was not found.")
            return None

if __name__ == "__main__":
    sample_text = "A good book would sometimes cost as much as a good house."
    text_instance = Text(sample_text)
    print("Frequency of 'good':", text_instance.word_frequency("good"))
    print("Most common word:", text_instance.most_common_word())
    print("Unique words:", text_instance.unique_words())
    

file_text_instance = Text.from_file("Day4/the_stranger.txt") 
if file_text_instance:
    print("Most common word in file:", file_text_instance.most_common_word())
    print("Unique words in file:", file_text_instance.unique_words())


