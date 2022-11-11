SELECT * from customers
WHERE points BETWEEN 2000 AND  3000
where last_name = ''
order BY customer_id DESC
limit 6, 3;

SELECT order_id, o.customer_id , first_name 
FROM orders o
JOIN customers c 
  ON o.customer_id = c.customer_id 

-- implicit join syntax
SELECT order_id, o.customer_id , first_name 
FROM orders o, customers c 
WHERE o.customer_id = c.customer_id 

SELECT *
FROM order_items oi 
JOIN sql_inventory.products p 
  ON oi.product_id = p.product_id

SELECT 
	o.order_id ,
	o.order_date ,
	c.first_name ,
	c.last_name ,
	os.name AS status_name
FROM orders o 
JOIN customers c 
	ON o.customer_id  = c.customer_id 
JOIN order_statuses os 
	ON o.status = os.order_status_id 


SELECT *
FROM order_items oi
JOIN order_item_notes oin 
-- 	ON oi.order_id = oin.order_id 
-- 	AND oi.product_id = oin.product_id
	USING (order_id, product_id)


SELECT 
	c.customer_id ,
	c.first_name ,
	o.order_id 
FROM customers c 
	JOIN orders o 
	ON c.customer_id = o.customer_id 
ORDER BY c.customer_id 

SELECT 
	c.customer_id ,
	c.first_name ,
	o.order_id ,
	s.name AS shipper
FROM customers c 
LEFT JOIN orders o 
-- 	ON c.customer_id = o.customer_id 
	USING (customer_id)
LEFT JOIN shippers s 
-- 	ON o.shipper_id  = s.shipper_id 
	USING (shipper_id)
ORDER BY c.customer_id 

SELECT order_id, o.customer_id , first_name 
FROM orders o
NATURAL JOIN customers c 

SELECT 
	c.first_name , 
	p.name
FROM customers c 
CROSS JOIN products p 
ORDER BY c.first_name, p.name;

-- implicit CROSS JOIN 
SELECT 
	c.first_name , 
	p.name
FROM customers c, products p  
ORDER BY c.first_name, p.name;

SELECT
	order_id, order_date , 'Active' as status 
FROM orders
WHERE order_date >= '2019-01-01'
UNION 
SELECT
	order_id, order_date , 'Archeive' as status 
FROM orders
WHERE order_date < '2019-01-01'

SELECT name
FROM shippers s 
UNION
SELECT first_name
FROM customers c;

INSERT INTO customers 
VALUES (
	DEFAULT,
	'xixi',
	'ni',
	'1995-01-19',
	NULL,
	'',
	'WUHAN',
	'HB',
	DEFAULT
)

INSERT INTO customers (
	first_name ,
	last_name ,
	birth_date ,
	address ,
	city ,
	state)
VALUES (
	'xixi',
	'ni',
	'1996-01-19',
	'address',
	'WUHAN',
	'HB');

INSERT INTO shippers (name)
VALUES ('shipper1'),
		('shipper2'),
		('shipper3');
	
INSERT INTO orders (
	customer_id,
	order_date ,
	status )
VALUES (1, '2019-01-02', 1);

SELECT LAST_INSERT_ID(); 

INSERT INTO order_items 
VALUES 
	(LAST_INSERT_ID(), 1, 1, 2.95),
	(LAST_INSERT_ID(), 2, 1, 3.95);

CREATE TABLE orders_archived AS
SELECT * FROM  orders;

INSERT INTO orders_archived 
SELECT * 
FROM orders 
WHERE order_date < '2019-01-01';
	
-- subqueries
SELECT *
FROM products 
WHERE unit_price > (
	SELECT unit_price 
	FROM products 
	WHERE product_id = 3
);

SELECT * 
FROM products p
WHERE product_id NOT IN (
	SELECT DISTINCT product_id 
	FROM order_items
);

SELECT *
FROM customers c 
WHERE customer_id IN (
	SELECT DISTINCT customer_id 
	FROM order_items oi 
	JOIN orders o USING (order_id)
	WHERE oi.product_id = 3
);

SELECT 
	DISTINCT c.customer_id , 
	first_name , 
	last_name 
FROM customers c 
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id 
WHERE oi.product_id = 3;


SELECT 
	order_id ,
	IFNULL(shipper_id, 'Not Assigned') AS shipper,
	COALESCE (shipper_id, comments, 'Not Assigned') AS shipper2
FROM orders  

SELECT 
	order_id , 
	order_date ,
	IF(YEAR(order_date) = YEAR(NOW()), 'Active', 'Archieve') AS category
FROM orders;

SELECT 
	order_id , 
	order_date,
	CASE 
		WHEN YEAR(order_date) = YEAR(NOW()) THEN 'Active'
		WHEN YEAR(order_date) = (YEAR(NOW()) -1) THEN 'Last year'
		WHEN YEAR(order_date) < YEAR(NOW())-1 THEN 'Archieve'
		ELSE 'Future'
	END AS category		
FROM orders;

