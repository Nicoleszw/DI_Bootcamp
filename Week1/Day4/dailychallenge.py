MATRIX_STRING ='''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''

# Steps:
# 1 - to create a 2D list
# 2 - decrypt the matrix: for loop to check characters
# 3 - replaces every group of symbols between two alpha characters by a space.
# 4 - output a string with the message 

# step 1: create like [['7i3'], ['Tsi'], ['h%x'],['7i3']]

matrix = []

# for i in range(len(MATRIX_STRING)):
#     row = list(MATRIX_STRING[i:i+3])
#     print(row)
#     matrix.append(row)
# print(matrix)

rows = MATRIX_STRING.split('\n')
print(rows)

for row in rows:
    matrix.append(list(row))

# print(matrix)

for row in matrix:
    column_0 = [row[0] for row in matrix]
    # column_0 = []
    # column_0.append(row[0])
    column_1 = [row[1] for row in matrix]
    column_2 = [row[2] for row in matrix]

column_matrix = []
column_matrix.append(column_0)
column_matrix.append(column_1)
column_matrix.append(column_2)

print(column_matrix)

output_string = ''
for col_list in column_matrix:
    # print(sublist)
    for i in range(len(col_list)):
        # print(sublist[i])
        if col_list[i].isalpha():
            output_string += col_list[i]
        else:
            if len(output_string)!= 0 and output_string[-1]!=' ':
                output_string+= ' '

print(output_string)




