--EXERCISE 1 

--1
-- SELECT name FROM language 

--2
-- SELECT
--f.title
--, f.description
--, l.name
--FROM film AS f
--JOIN language AS l 
--ON f.language_id = l.language_id

--3
--SELECT
--f.title
--, f.description
--, l.name
--FROM film AS f
--RIGHT JOIN language AS l 
--ON f.language_id = l.language_id

--4
--CREATE TABLE new_film (
--new_film_id INT PRIMARY KEY,
--new_film_name VARCHAR (100) NOT NULL)

--INSERT INTO new_film (new_film_id, new_film_name)
--VALUES (111111, 'Luna in the space'),
--(22222, 'The world of Luna'),
--(111222, 'The magic world of Luna');

--5 
--CREATE TABLE customer_review (
--review_id SERIAL PRIMARY KEY,
--film_id INT,
--language_id INT,
--title VARCHAR(255) NOT NULL,
--score INT CHECK (score BETWEEN 1 AND 10),
--review_text TEXT,
--last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--FOREIGN KEY (film_id) REFERENCES new_film(new_film_id) ON DELETE CASCADE,
--FOREIGN KEY (language_id) REFERENCES language(language_id)
--);


--6 
--INSERT INTO customer_review (film_id, language_id, title, score, review_text)
--VALUES 
--((SELECT new_film_id FROM new_film WHERE new_film_name = 'Luna in the space'), 1, 'Mind-blowing!', 10, 'A masterpiece of science fiction.'),
--((SELECT new_film_id FROM new_film WHERE new_film_name = 'The magic world of Luna'), 1, 'Emotional and deep', 9, 'One of the best movies.');

--7 
--DELETE FROM new_film WHERE new_film_name = 'The world of Luna';

--EXERCISE 2

--1 

--UPDATE film 
--SET language_id = (SELECT language_id FROM language WHERE name = 'French')
--WHERE title IN ('The magic world of Luna', 'Luna in the space');

--3
--DROP TABLE customer_review;

--4
--SELECT COUNT(*) 
--FROM rental 
--WHERE return_date IS NULL;

--5
--SELECT f.title, f.replacement_cost
--FROM rental r
--JOIN inventory i ON r.inventory_id = i.inventory_id
--JOIN film f ON i.film_id = f.film_id
--WHERE r.return_date IS NULL
--ORDER BY f.replacement_cost DESC
--LIMIT 30;

--6
--SELECT f.title
--FROM film f
--JOIN film_actor fa ON f.film_id = fa.film_id
--JOIN actor a ON fa.actor_id = a.actor_id
--WHERE f.description ILIKE '%sumo wrestler%'
--AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';

--SELECT title
--FROM film
--WHERE length < 60
--AND rating = 'R'
--AND description ILIKE '%documentary%';

--SELECT f.title
--FROM rental r
--JOIN payment p ON r.rental_id = p.rental_id
--JOIN inventory i ON r.inventory_id = i.inventory_id
--JOIN film f ON i.film_id = f.film_id
--JOIN customer c ON r.customer_id = c.customer_id
--WHERE c.first_name = 'Matthew' 
--AND c.last_name = 'Mahan'
--AND p.amount > 4.00
--AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

--SELECT f.title
--FROM rental r
--JOIN inventory i ON r.inventory_id = i.inventory_id
--JOIN film f ON i.film_id = f.film_id
--JOIN customer c ON r.customer_id = c.customer_id
--WHERE c.first_name = 'Matthew'
--AND c.last_name = 'Mahan'
--AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
--ORDER BY f.replacement_cost DESC
--LIMIT 1;






