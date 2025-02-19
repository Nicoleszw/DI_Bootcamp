from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\nRestaurant Menu Manager")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")

        choice = input("Enter your choice: ").strip().upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("\nFinal Menu:")
            show_restaurant_menu()
            print("\nExiting... Thank you!")
            break
        else:
            print("Invalid option. Please try again.")

def view_item():
    item_name = input("Enter the name of the item to view: ").strip()
    item = MenuManager.get_by_name(item_name)

    if item:
        print(f"Found Item: ID: {item[0]}, Name: {item[1]}, Price: {item[2]}")
    else:
        print("Item not found.")

def add_item_to_menu():
    name = input("Enter the item name: ").strip()
    price = input("Enter the item price: ").strip()

    if not price.isdigit():
        print("Invalid price. Please enter a number.")
        return

    item = MenuItem(name, int(price))
    item.save()
    print(f"'{name}' was added successfully!")

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ").strip()
    item = MenuItem(name, 0)  

    try:
        item.delete()
        print(f"'{name}' was deleted successfully!")
    except Exception as e:
        print(f"Error deleting '{name}': {e}")

def update_item_from_menu():
    old_name = input("Enter the current name of the item: ").strip()
    new_name = input("Enter the new name: ").strip()
    new_price = input("Enter the new price: ").strip()

    if not new_price.isdigit():
        print("Invalid price. Please enter a number.")
        return

    item = MenuItem(old_name, 0)  
    try:
        item.update(new_name=new_name, new_price=int(new_price))
        print(f"'{old_name}' was updated to '{new_name}' with price {new_price}!")
    except Exception as e:
        print(f"Error updating '{old_name}': {e}")

def show_restaurant_menu():
    items = MenuManager.all_items()
    
    if not items:
        print("The menu is empty.")
        return
    
    print("\nRestaurant Menu:")
    print("-" * 30)
    for item in items:
        print(f"🍽 {item[1]} - ${item[2]}")
    print("-" * 30)

if __name__ == "__main__":
    show_user_menu()

