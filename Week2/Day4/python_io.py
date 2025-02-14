#Old school: not so good: we needed to "manually" close the file

f = open("Day4/simple.txt", "r+") #open("complete file name - with extention")
content = f.read()
print(content)
f.close()


try: 
    f = open("Day4/simple.txt", "r+") 
    content = f.read()
    print(content)
finally:
    f.close()

#After python 2.5 version we have a magic keyword to close automaticlly a file: "with"

with open("Day4/simple.txt", "a+", encoding= "utf-8") as f:
    for i in range(10):
        f.write(f"this is line {i}\n")
    content = f.read()
    print(content)


