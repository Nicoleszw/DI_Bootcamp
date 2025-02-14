class AnagramChecker:
    def __init__(self, word_list_file="Mini_Project/sowpods.txt"):
        with open(word_list_file, "r") as file:
            self.word_list = set(file.read().splitlines())  
    
    def is_valid_word(self, word):
        return word.upper() in self.word_list

    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2) and word1 != word2

    def get_anagrams(self, word):
        word = word.upper()
        return [w for w in self.word_list if self.is_anagram(word, w)]

