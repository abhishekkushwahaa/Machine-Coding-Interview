SELECT customer_id, COUNT(*) AS order_count
FROM Orders
GROUP BY customer_id;
