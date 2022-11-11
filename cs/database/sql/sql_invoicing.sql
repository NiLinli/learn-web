SELECT 
	p.date,
	p.invoice_id ,
	p.amount ,
	c.name ,
	pm.name 
FROM payments p 
JOIN clients c 
	ON p.client_id = c.client_id 
JOIN payment_methods pm 
	ON p.payment_id = pm.payment_method_id;
	
CREATE TABLE invoices_archived AS
SELECT 
	i.invoice_id ,
	i.`number` ,
	c.name AS client,
	i.invoice_total ,
	i.payment_total ,
	i.invoice_date ,
	i.payment_date ,
	i.due_date 
FROM invoices i 
JOIN clients c 
	USING (client_id)
WHERE payment_date IS NOT NULL;

UPDATE invoices 
SET payment_total = 10, payment_date = '2019-03-02'
WHERE invoice_id = 1;

UPDATE invoices 
SET payment_total = DEFAULT , payment_date = NULL
WHERE invoice_id = 1;

UPDATE invoices 
SET payment_total = invoice_total * 0.5, payment_date = due_date 
WHERE invoice_id  = 3;

UPDATE invoices 
SET payment_total = invoice_total * 0.5, payment_date = due_date 
WHERE client_id  = 3;

UPDATE invoices 
SET payment_total = invoice_total * 0.5, payment_date = due_date 
WHERE client_id  IN (3, 4);


UPDATE invoices 
SET payment_total = invoice_total * 0.5, payment_date = due_date
WHERE client_id = (
					SELECT client_id
					FROM clients c 
					WHERE name = 'Myworks');
				
UPDATE invoices 
SET payment_total = invoice_total * 0.5, payment_date = due_date
WHERE client_id IN (
					SELECT client_id
					FROM clients c 
					WHERE state IN ('CA', 'NY'));			

DELETE FROM invoices_archived;
	
DELETE FROM invoices  
WHERE client_id = (
	SELECT  client_id  FROM clients 
	WHERE name = 'Myworks' 
);

-- aggregate function
SELECT 
	MAX(invoice_total) AS highest,
	MIN(invoice_total) AS lowest,
	AVG(invoice_total) AS average,
	SUM(invoice_total) AS total,
	SUM(invoice_total * 2) AS double_total,
	COUNT(invoice_total) AS number_of_invoices,
	-- 非空的 row
	COUNT(payment_date) AS count_of_payments,
	COUNT(*) AS total_records,
	COUNT(client_id),
	COUNT(DISTINCT  client_id)
FROM invoices;

-- aggresive 中的非聚合列需要 group by
SELECT 
	client_id ,
	SUM(invoice_total) AS total_sales
FROM invoices i
WHERE invoice_date >= '2019-07-01'
GROUP BY client_id
ORDER BY total_sales DESC ;

SELECT 
	state,
	city,
	SUM(invoice_total) AS total_sales
FROM invoices i 
JOIN clients c USING (client_id)
GROUP BY state, city;

SELECT 
	client_id ,
	SUM(invoice_total) AS total_sales,
	COUNT(*) AS number_of_invoices
FROM invoices i
GROUP BY client_id
-- aggregate 分组之后的查询条件使用 HAVING 而不是 WHERE
HAVING total_sales > 500 AND number_of_invoices > 5;

SELECT 
	client_id ,
	SUM(invoice_total) AS total_sales
FROM invoices i
GROUP BY client_id WITH ROLLUP ;

-- ROLLUP 多个维度 GROUP BY, 嵌套汇总
SELECT 
	state, 
	city,
	SUM(invoice_total) AS total_sales
FROM invoices i
JOIN clients c USING (client_id)
GROUP BY state, city WITH ROLLUP ;


SELECT *
FROM clients c
WHERE client_id NOT IN (
	SELECT DISTINCT client_id 
	FROM invoices
);

SELECT * 
FROM clients c 
LEFT JOIN invoices i USING (client_id)
WHERE i.invoice_id IS NULL; 

SELECT *
FROM invoices i 
WHERE invoice_total > (
	SELECT MAX(invoice_total)
	FROM invoices i 
	WHERE client_id = 3	
);

SELECT *
FROM invoices i 
WHERE invoice_total >  ALL (
	SELECT invoice_total
	FROM invoices i 
	WHERE client_id = 3	
);

SELECT *
FROM clients c 
WHERE client_id IN (
	SELECT client_id   
	FROM invoices i  
	GROUP BY client_id 
	HAVING COUNT(*) >= 2
);

SELECT *
FROM clients c 
WHERE client_id = ANY (
	SELECT client_id   
	FROM invoices i  
	GROUP BY client_id 
	HAVING COUNT(*) >= 2
);


SELECT *
FROM clients c 
-- IN 后的子查询生成的结果集有可能很大
WHERE client_id IN (
	SELECT DISTINCT client_id 
	FROM invoices i 
);

SELECT *
FROM clients c 
-- ROW 判断
WHERE EXISTS (
	SELECT client_id 
	FROM invoices i
	-- 父查询中的值满足在子查询中满足条件(子查询只要有一行结果), 父查询的 ROW 就会被保留
	WHERE c.client_id = client_id
);

SELECT 
	invoice_id ,
	invoice_total,
	(SELECT AVG(invoice_total) FROM invoices) AS invoice_averge,
	-- AS 后面的值不能直接用于计算
	invoice_total - (SELECT invoice_averge) AS difference
FROM invoices i;

SELECT *
-- sql 看起来比较难懂, 适用于简单的查询, 复杂查询使用 views
FROM (
	SELECT 
		client_id ,
		name,
		(SELECT SUM(invoice_total)  FROM invoices i WHERE c.client_id = i.client_id) AS total_sales,
		(SELECT AVG(invoice_total) FROM invoices i2) AS averge,
		((SELECT total_sales) - (SELECT averge)) AS difference
	FROM clients c 
) AS sales_summary
WHERE total_sales IS NULL




