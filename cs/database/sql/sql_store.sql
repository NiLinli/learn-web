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


-- transaction
-- 一组 sql 语句代表一个工作单元

-- Atomicity 原子性
-- 多个语句执行都成功才算执行成功
-- 有一个执行失败, 则事务执行失败, 其他执行成功的语句需要回退到执行成功之前的状态

-- Consistency 一致性
-- Isolation 隔离性  如果多个事务更新同一行数据, 数据会被锁定, 等待正在更新的事务更新完成后再更新
-- Durability 持久性 

START TRANSACTION;

INSERT INTO orders(customer_id, order_date, status)
VALUES (1, '2022-11-12', 1);

INSERT INTO order_items
VALUES(LAST_INSERT_ID(), 1, 1, 1);

-- 事务会装好每条语句, 如果都执行成功就提交修改数据库
-- SELECT/UPDATE/INSERT/DELETE Mysql 会将这些装入到事务中, 然后自动提交
COMMIT;

-- 不提交事务, 回退事务
-- ROLLBACK;

SHOW VARIABLES LIKE 'autocommit';





-- Concurrency
-- 存在两个或者多个用户同时访问相同的数据
-- 一个用户修改其他用户正在检索或者修改的数据


START TRANSACTION;
UPDATE customers 
SET points = points + 10
WHERE customer_id  = 1;
COMMIT;

-- READ COMITTED
-- REPEATABLE READ(默认)
-- SERIALIZABLE

-- 级别越高, 锁越多, 对性能压榨越多
-- 级别越低, 越会碰上并发问题, 性能好



-- Dirty reads 一个事务读取了尚未被提交的数据
-- 确保读取的是提交了的数据
-- 最低级别防护 READ COMITTED 


-- None repeating Reads 解决了脏读去的问题后, 读取数据两次得到不一样的结果
-- 确保其他事务对数据的更改对该事务不可见 
-- READ COMITTED 无法保证, 因为你这条事务执行的过程中, 可能已经提交了多个事务
-- 最低级别防护 REPEATABLE READ

-- Lost update 
-- tansaction 默认行为会给事务上锁, 防止其他事务对数据进行修改
-- 普通修改也是放入 transaction 中执行的, 也不会有这个问题
-- 最低级别防护 REPEATABLE READ

-- Phantom reads
-- 突然出现的数据, 像幽灵
-- 执行查询后才添加/更新/删除的
-- 保证没有任何程序运行的更新会影响查询 SERIALIZABLE 
-- 如果其他并发执行的事务执行的语句可能会影响查询, 等待其语句执行完成
-- 最低级别防护 SERIALIZABLE


SHOW VARIABLES LIKE 'transaction_isolation';

-- 为下一个事务设置 isolation 
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- 为当前会话中的事务设置 isolation 
SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- 为所有会话中的事务设置 isolation 
SET GLOBAL TRANSACTION ISOLATION LEVEL SERIALIZABLE;


SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT points
FROM customers c 
WHERE customer_id = 1;

START TRANSACTION;
UPDATE customers 
SET points = 20
WHERE customer_id  = 1;
ROLLBACK;



SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT points
FROM customers c 
WHERE customer_id = 1;

START TRANSACTION;
UPDATE customers 
SET points = 20
WHERE customer_id  = 1;
COMMIT;



SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
-- 两次是两个已提交的状态
SELECT points FROM customers c WHERE customer_id = 1;
SELECT points FROM customers c WHERE customer_id = 1;
COMMIT;



START TRANSACTION;
UPDATE customers 
SET points = 40
WHERE customer_id  = 1;
COMMIT;





SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT points FROM customers c WHERE customer_id = 1;
SELECT points FROM customers c WHERE customer_id = 1;
COMMIT;

START TRANSACTION;
UPDATE customers 
SET state = 'VA'
WHERE customer_id  = 1;
COMMIT;



SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT * FROM customers c WHERE state  = 'VA';
COMMIT;

START TRANSACTION;
UPDATE customers SET state = 'VA' WHERE customer_id = 1;
UPDATE orders SET status = 1 WHERE order_id = 1;
COMMIT;


SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
START TRANSACTION;
SELECT * FROM customers c WHERE state  = 'VA';
COMMIT;

START TRANSACTION;
UPDATE orders SET status = 1 WHERE order_id = 1;
UPDATE customers SET state = 'VA' WHERE customer_id = 1;
COMMIT;


-- DEAD LOCK
-- 死锁会 rollback 事务
-- 应用程序 重试 或者 告知用户操作失败引导用户重新提交
-- 只能减少死锁, 无法完全避免
-- 检查经常死锁的是不是以相反的顺序更新数据
-- 简化事务, 缩小事务运行时长


















START TRANSACTION;
UPDATE customers 
SET state = 'VA'
WHERE customer_id  = 1;
COMMIT;

START TRANSACTION;
UPDATE customers 
SET state = 'VA'
WHERE customer_id  = 3;
COMMIT;



UPDATE products 
SET properties = '
{ 
	"dimenssions": [1, 2, 3, 4, 5],
	"weight": 10,
	"manufacturer": {
		"name": "sony"
	}	
}
'
WHERE product_id = 1;


UPDATE products 
SET properties = JSON_OBJECT(
	'dimenssions', JSON_ARRAY(1, 2, 3, 4, 5),
	'weight', 10,
	'manufacturer', JSON_OBJECT(
		'name','sony'
	)
)
WHERE product_id = 2;

SELECT 
	product_id,
	JSON_EXTRACT(properties, '$.weight'),
	-- -> 列路径运算符 
	properties -> '$.weight',
	properties -> '$.dimenssions',
	properties -> '$.dimenssions[1]',
	properties -> '$.manufacturer.name',
	properties ->> '$.manufacturer.name'
FROM products p 
WHERE properties ->> '$.manufacturer.name' = 'sony';


UPDATE products 
SET properties = JSON_SET(
	properties,
	'$.weight', 20,
	'$.age', 18,
	'$.manufacturer.year', 2018 
)
WHERE product_id = 1;

UPDATE products 
SET properties = JSON_REMOVE(
	properties,
	'$.age',
	'$.manufacturer.year' 
)
WHERE product_id = 1;



SELECT customer_id 
FROM customers c 
WHERE state = 'CA';

EXPLAIN SELECT customer_id 
FROM customers c 
WHERE state = 'CA';

CREATE INDEX idx_state ON customers (state);

SELECT customer_id 
FROM customers c 
WHERE points  > 1000;

EXPLAIN SELECT customer_id 
FROM customers c 
WHERE points  > 1000;

CREATE INDEX idx_point ON customers (points);

ANALYZE TABLE customers ;
SHOW INDEXES IN customers;
SHOW INDEXES IN orders;
-- PRIMARY index
-- 二级 index 自己创建 + 外键  同时存储了主键


-- 找到最接近总数的 索引长度最短的
SELECT COUNT(*) FROM customers c; 
SELECT 
	COUNT(DISTINCT LEFT(last_name, 1)),
	COUNT(DISTINCT LEFT(last_name, 5)),
	COUNT(DISTINCT LEFT(last_name, 10))
FROM customers c;

-- 前缀 index
CREATE INDEX idx_last_name ON customers (last_name(5));

-- 全文 index 
-- 分词 匹配搜索 
CREATE FULLTEXT INDEX idx_title_body ON posts(title, body);

SELECT *, MATCH(title, body) AGAINST('react redux')
FROM posts p 
WHERE MATCH(title, body) AGAINST('react redux');

SELECT *, MATCH(title, body) AGAINST('react redux')
FROM posts p 
WHERE MATCH(title, body) AGAINST('react -redux +form' IN BOOLEAN MODE); 

SELECT *, MATCH(title, body) AGAINST('react redux')
FROM posts p 
WHERE MATCH(title, body) AGAINST('"Handling a Form"' IN BOOLEAN MODE); 


-- 只会通过 idx_state 定位
-- 然后在定位的结果中遍历所有的 points
EXPLAIN SELECT  customer_id
FROM customers c 
WHERE state = 'CA' AND points > 1000;

-- 复合索引
-- 索引越多, 写入越慢
-- 复合索引比创建单个索引更适合一些
CREATE INDEX idx_state_point ON customers(state, points);
DROP INDEX idx_state ON customers;
DROP INDEX idx_point ON customers;

-- 1. 搜索频繁的列放在前面 
-- 2. WHERE 约束力强的放在前面, = 放在 LIKE 前面 
-- 3. Cardinality 高的放在前面  缩小范围  



EXPLAIN SELECT customer_id 
FROM customers c 
USE INDEX (idx_last_name_state)
WHERE state = 'CA' AND last_name LIKE 'A%';

SELECT 
	COUNT(DISTINCT state) AS state_cardinality,
	COUNT(DISTINCT last_name) AS last_name_cardinality
FROM customers c;

-- 40 row
CREATE INDEX idx_last_name_state ON customers(last_name, state);

-- 7 row
CREATE INDEX idx_state_last_name ON customers(state, last_name);


-- 复合索引对 OR 无效
-- OR 需要两个索引分开, 一条语句只能使用一个 index
EXPLAIN SELECT  customer_id
FROM customers c 
WHERE state = 'CA' OR points > 1000;

-- 使用 union 可以使用两个 index
EXPLAIN SELECT customer_id
FROM customers c 
WHERE state = 'CA'
UNION 
SELECT customer_id
FROM customers c 
WHERE points > 1000;

-- 需要把列单独放
EXPLAIN SELECT customer_id 
FROM customers c 
WHERE points + 10 > 2000;

EXPLAIN SELECT customer_id 
FROM customers c 
WHERE points > 2000 - 10;


-- 排序
EXPLAIN SELECT customer_id FROM customers c 
ORDER BY first_name;

EXPLAIN SELECT customer_id FROM customers c 
ORDER BY state ;

SHOW STATUS LIKE 'last_query_cost';

-- 索引没有记录其他列
-- 主键会包含二级索引
-- Index 覆盖的列, 就不会去读表
EXPLAIN SELECT * FROM customers c 
ORDER BY first_name;


EXPLAIN SELECT customer_id , phone  FROM customers c 
ORDER BY first_name;

-- (A,B) (A) 多余 (B, A) 不多余


SELECT * FROM mysql.user;



