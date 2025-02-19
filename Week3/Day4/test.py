from menu_item import MenuItem
from menu_manager import MenuManager

item = MenuItem('Burger', 35)
item.save()

item.delete()

item.update('Veggie Burger', 37)

item2 = MenuManager.get_by_name('Beef Stew')
print("Fetched Item:", item2)

items = MenuManager.all_items()
print("All Menu Items:", items)


