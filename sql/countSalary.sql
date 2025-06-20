-- Write your MySQL query statement below

SELECT "Low Salary" As category, COUNT(income) as accounts_count
FROM Accounts
WHERE income < 20000
UNION
SELECT "Average Salary" As category, COUNT(income) as accounts_count
FROM Accounts
WHERE income >= 20000 AND income <= 50000
UNION
SELECT "High Salary" As category, COUNT(income) as accounts_count
FROM Accounts
WHERE income > 50000
