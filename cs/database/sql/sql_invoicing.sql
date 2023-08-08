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
WHERE total_sales IS NULL;

-- 添加 replace 可以更新 view
CREATE OR REPLACE VIEW sales_by_client AS
SELECT
	c.client_id ,
	c.name ,
	SUM(i.invoice_total) AS total_sales
FROM clients c 
JOIN invoices i 
	USING (client_id)
GROUP BY c.client_id, c.name;

SELECT * 
-- view 是一张虚拟表, 但是并不存储数据
FROM sales_by_client
ORDER BY total_sales DESC;

DROP VIEW sales_by_client;

-- 不包含这些 clause 的 view 可以更新 view 数据, 同时也更新了 table 数据
-- DISTICT
-- AGGREGATE FUNCTION
-- GROUP BY / HAVING
-- UNION
CREATE OR REPLACE VIEW invoices_with_balance AS
SELECT 
	invoice_id ,
	`number` ,
	client_id ,
	invoice_total ,
	payment_total ,
	invoice_total  - payment_total  AS balance,
	invoice_date ,
	due_date ,
	payment_date 
FROM invoices i 
WHERE invoice_total - payment_total > 0
-- 修改一行数据, 导致在view 中消失了, 这次修改就会失败
WITH CHECK OPTION;

DELETE FROM invoices_with_balance 
WHERE invoice_id = 1;

UPDATE invoices_with_balance 
SET due_date = DATE_ADD(due_date, INTERVAL 2 DAY) 
WHERE invoice_id = 2; 

UPDATE invoices_with_balance 
SET payment_total = 175.32
WHERE invoice_id = 2;

UPDATE invoices_with_balance 
SET payment_total = 147.99
WHERE invoice_id = 3;

-- view 
-- 简化查询
-- 可以为数据库提供一层抽象, 也就是包装, 如果修改数据库, 可以修改视图达到其他耦合语句不发生改变
-- 限制基础表的访问


DROP PROCEDURE IF EXISTS sql_invoicing.get_clients;

DELIMITER $$
$$
CREATE PROCEDURE sql_invoicing.get_clients()
BEGIN
	SELECT * FROM clients;
END
$$
DELIMITER ;


DROP PROCEDURE IF EXISTS sql_invoicing.get_clients_by_state;

DELIMITER $$
$$
CREATE PROCEDURE sql_invoicing.get_clients_by_state(state CHAR(2))
BEGIN
-- 	IF state IS NULL 
-- 	THEN 
-- 		SELECT * FROM sql_invoicing.clients;
-- 	ELSE
-- 		SELECT * 
-- 		FROM sql_invoicing.clients c
-- 		WHERE c.state = state;
-- 	END IF;
	
	SELECT * FROM sql_invoicing.clients c
	WHERE c.state = IFNULL(state, c.state); 
END
$$
DELIMITER ;


DROP PROCEDURE IF EXISTS sql_invoicing.make_payment;

DELIMITER $$
$$
CREATE PROCEDURE sql_invoicing.make_payment	(
	invoice_id INT,
	payment_amount DECIMAL(9, 2),
	payment_date DATE
)
BEGIN
	-- APP 中校验数据比较高效, 方便
	IF payment_amount <= 0 THEN
		SIGNAL SQLSTATE '22003'
			SET MESSAGE_TEXT = 'Invalid payment amount';
	END IF;
	
	UPDATE invoices i 
	SET 
		i.payment_total = payment_total ,
		i.payment_date = payment_date 
	WHERE i.invoice_id = invoice_id;
END
$$
DELIMITER ;


DROP PROCEDURE IF EXISTS sql_invoicing.get_unpaid_invoices_for_client;

DELIMITER $$
$$
CREATE PROCEDURE sql_invoicing.get_unpaid_invoices_for_client(
	client_id INT,
	OUT invoices_count INT,
	OUT invoices_total DECIMAL(9, 2)
)
BEGIN
	SELECT COUNT(*), SUM(invoice_total)
	INTO invoices_count, invoices_total
	FROM invoices i
	WHERE i.client_id = client_id 
		AND payment_total = 0;
END
$$
DELIMITER ;


DROP PROCEDURE IF EXISTS sql_invoicing.get_risk_factor;

DELIMITER $$
$$
CREATE PROCEDURE sql_invoicing.get_risk_factor()
BEGIN
	-- procedure local variable
	DECLARE risk_factor DECIMAL(9, 2) DEFAULT 0;
	DECLARE invoices_total DECIMAL(9, 2);
	DECLARE invoices_count INT;

	SELECT COUNT(*), SUM(invoice_total)
	INTO invoices_count, invoices_total
	FROM invoices;

	SET risk_factor = invoices_total / invoices_count * 5;

	SELECT risk_factor;

END
$$
DELIMITER ;





CALL get_clients();


CALL get_clients_by_state('CA');
CALL get_clients_by_state(NULL);


CALL make_payment(2, 100, '2022-11-11');
CALL make_payment(2, -100, '2022-11-11');

CALL get_unpaid_invoices_for_client(3);

-- user or session variable
SET @invoices_count = 0;
SET @invoices_total = 0;
CALL get_unpaid_invoices_for_client(3, @invoices_count, @invoices_total);
SELECT @invoices_count, @invoices_total;

CALL get_risk_factor();


-- stored procedure 包含 sql 代码的数据库对象
-- Function 返回唯一 value
-- procedure 返回结果集


-- 增强数据的一致性
-- 表操作审计
DROP TRIGGER IF EXISTS sql_invoicing.payments_after_insert;
USE sql_invoicing;

DELIMITER $$
$$
CREATE DEFINER=`root`@`%` TRIGGER `payments_after_insert` AFTER INSERT ON `payments` FOR EACH ROW BEGIN
	UPDATE invoices 
	SET payment_total = payment_total + NEW.amount
	WHERE invoice_id = NEW.invoice_id; 
END$$
DELIMITER ;

INSERT INTO payments 
VALUES (DEFAULT, 5, 3, '2022-11-11', 10, 1);

DELETE 
FROM payments 
WHERE payment_id = 10;

SHOW TRIGGERS;

DROP TRIGGER IF EXISTS payments_after_insert;



-- event
-- task 一次或者定时任务
-- shceduer 寻找执行的任务

SHOW VARIABLES LIKE 'event%';
SET GLOBAL event_scheduler ON;
SHOW EVENTS;


USE sql_invoicing;
ALTER EVENT yearly_delete_stale_audit_rows
ON SCHEDULE 
	EVERY 1 YEAR STARTS '2022-01-01' ENDS '2032-01-01'
DO BEGIN 
	DELETE FROM payments_audit 
	WHERE action_date < NOW() - INTERVAL 1 YEAR ;
END 
;


DROP EVENT IF EXISTS yearly_delete_stale_audit_rows;















