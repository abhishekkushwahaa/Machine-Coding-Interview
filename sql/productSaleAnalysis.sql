-- Write your MySQL query statement below

Select product_name, year, price from Sales s
Left Join Product p
ON s.product_id = p.product_id
