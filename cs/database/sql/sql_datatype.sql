-- numberic function
SELECT ROUND(2.5743);
SELECT ROUND(2.5743, 1);
SELECT ROUND(2.5743, 2);
SELECT TRUNCATE(2.5743, 3);
SELECT CEILING(2.5743);
SELECT FLOOR(2.5743);
SELECT ABS(-2.5743);
-- 0 到 1
SELECT RAND(); 

-- string function
-- 字节数
SELECT LENGTH('你好');
SELECT UPPER('Sky');
SELECT LOWER('Sky');
SELECT LTRIM('    sky    ');
SELECT RTRIM('    sky    ');
SELECT TRIM('    sky    ');
SELECT LEFT('你😊好sky', 2);
SELECT RIGHT('你😊好sky', 4);
-- position 从 1 开始
SELECT SUBSTRING('你😊好sky', 2, 1);
SELECT LOCATE('s', '你😊好sky');
SELECT LOCATE('S', '你😊好sky');
SELECT LOCATE('q', '你😊好sky');
SELECT REPLACE('你😊好sky', 'sk', 'yy');
SELECT CONCAT('xixi', 'ni'); 

-- date function
SELECT NOW(), CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP;
SELECT CURDATE(), CURRENT_DATE();
SELECT CURTIME(), CURRENT_TIME();
SELECT UNIX_TIMESTAMP(),UNIX_TIMESTAMP(CURDATE()) , FROM_UNIXTIME(1668493353);
SELECT UTC_TIMESTAMP(), UTC_DATE(), UTC_TIME();


SELECT YEAR(NOW()), YEAR(CURDATE()), YEAR(CURTIME()); 
-- 标准 sql
SELECT EXTRACT(DAY FROM NOW());
SELECT DATE_FORMAT(NOW(), '%Y %m %d');
SELECT TIME_FORMAT(NOW(), '%H:%i %p');

SELECT DATE_ADD(NOW(), INTERVAL 1 YEAR);
SELECT DATE_ADD(NOW(), INTERVAL -1 YEAR);

-- 返回当天的秒数
SELECT TIME_TO_SEC('2022-10-20 0:0:59');


-- 只对比 DAY
SELECT DATEDIFF('2022-11-11 00:00:00', '2022-10-20 14:59:59');
-- 
SELECT TIMESTAMPDIFF(second ,'2022-11-11 18:01:00', now());


 