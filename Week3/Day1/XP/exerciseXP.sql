CREATE TABLE items (
name VARCHAR (50) NOT NULL,
price SMALLINT NOT NULL)
;
INSERT INTO items (name, price)
VALUES ('Small desk', 100),
('Large desk', 300),
('Fan', 80);

SELECT * FROM items

CREATE TABLE customers (
first_name VARCHAR (50),
last_name VARCHAR (50));

INSERT INTO customers (first_name, last_name)
VALUES ('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

SELECT * FROM customers

SELECT * FROM items WHERE price > 80

SELECT * FROM items WHERE price < 300

SELECT * FROM customers WHERE last_name = 'Smith'

SELECT * FROM customers WHERE last_name = 'Jones'

SELECT * FROM customers WHERE first_name != 'Scott'

