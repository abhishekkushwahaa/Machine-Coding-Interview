SELECT name, salary
FROM Employees
WHERE salary = (SELECT MAX(salary) FROM Employees);
