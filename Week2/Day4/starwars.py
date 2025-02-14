# Exercise 
# Download this text file http://www.practicepython.org/assets/nameslist.txt and do the following steps

# Read the file line by line
# Read only the 5th line of the file
# Read only the 5 first characters of the file
# Read all the file and return it as a list of strings. Then split each word
# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
# Append your first name at the end of the file
# Append "SkyWalker" next to each first name "Luke"


with open("Day4/starwars.txt", "r", encoding="utf=8") as file:
    list_content = file.readlines()
    for line in list_content:
        print(line)

print("5th line:", list_content[4])

  
#file.seek(0)
#char = file.read(5)
#print(char)

#list of strings:
print(list_content)
for line in list_content:
    print(list(line))

occirences = {"Darth":0, "Lea":0, "Luke":0}
for line in list_content:
    if line == "Darth\n":
        occirences["Darth"] +=1
    if line == "Lea\n":
        occirences["Lea"] +=1
    if line == "Luke\n":
        occirences["Luke"] +=1
    
print(occirences)



        

    