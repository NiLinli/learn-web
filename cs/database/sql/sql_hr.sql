SELECT
	e.employee_id,
	e.first_name,
	m.first_name AS manager
FROM employees e 
JOIN employees m
	ON e.reports_to = m.employee_id 

SELECT
	e.employee_id,
	e.first_name,
	m.first_name AS manager
FROM employees e, employees m
	ON e.reports_to = m.employee_id 
	
SELECT
	e.employee_id,
	e.first_name,
	m.first_name AS manager
FROM employees e 
LEFT JOIN employees m
	ON e.reports_to = m.employee_id 

-- correlated subqueries
SELECT *
FROM employees e 
WHERE salary > (
	SELECT AVG(salary)
	FROM employees 
	WHERE office_id = e.office_id
);