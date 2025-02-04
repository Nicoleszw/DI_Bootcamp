# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

word = input("Give me a word.")
my_dic = {}
k = 0 
for i in word:
    my_dic[i] = k 
    k += 1
print(my_dic)

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

store = {
    "Laptop": "$1,200",
    "Phone": "$800",
    "Headphones": "$150",
    "Mouse": "$50",
    "Keyboard": "$100",
    "Charger": "$25",
    "USB Cable": "$10",
    "Notebook": "$5"
}

wallet = input("Enter the amount in your wallet")

wallet_amount = float(wallet.replace("$", "").replace(",", ""))

affordable_items = []

for item, price in store.items():
    price_num = float(price.replace("$", "").replace(",", ""))  
    if price_num <= wallet_amount:
        affordable_items.append(item)

affordable_items.sort()

if affordable_items:
    print("You can afford:", affordable_items)
else:
    print("Nothing")


