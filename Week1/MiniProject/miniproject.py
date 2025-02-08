# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

# Hint
# To do this project, you basically need to create four functions:
# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.
# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.

import random

## Display the Tic Tac Toe board

def display_board(board):
    print("\nTIC TAC TOE")
    print("***********************")
    for row in range(3):
        print("*", end=" ")
        for col in range(3):
            print(board[row][col] if board[row][col] != " " else " ", end=" | ")
        print("*")
        if row < 2:
            print("* ---+---+--- *") 
    print("***********************\n")

## Check if a player has won
def check_win(board, player):
    
    for i in range(3):
        if all(board[i][j] == player for j in range(3)) or all(board[j][i] == player for j in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

## Main game function
def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    available_positions = {(r, c) for r in range(3) for c in range(3)}
    
    print("Welcome to TIC TAC TOE!\n")
    display_board(board)

    for turn in range(9):  
        player = "X" if turn % 2 == 0 else "O"
        print(f"Player {player}'s turn...")

        while True:
            try:
                row = int(input("Enter row (0, 1, or 2): "))
                col = int(input("Enter column (0, 1, or 2): "))
                if (row, col) in available_positions:
                    break
                else:
                    print("Invalid move! That spot is already taken. Try again.")
            except ValueError:
                print("Invalid input! Please enter a valid row and column number.")

        board[row][col] = player
        available_positions.remove((row, col))
        display_board(board)

        ## Check for a winner
        if check_win(board, player):
            print(f"Player {player} wins!")
            break
    else:
        print("It's a tie!")

    # Ask to play again
    if input("Do you want to play again? (yes/no): ").strip().lower() == "yes":
        play()

play()
