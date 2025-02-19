import psycopg2
from menu_item import get_connection

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s;", (name,))
        item = cursor.fetchone() 
        cursor.close()
        connection.close()
        return item if item else None  

    @classmethod
    def all_items(cls):
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM Menu_Items;")
        items = cursor.fetchall()  
        cursor.close()
        connection.close()
        return items  

