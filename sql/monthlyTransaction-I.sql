-- Write your MySQL query statement below

SELECT date_format(trans_date, "%Y-%m") month, country, count(state) trans_count,
SUM(if(state="approved", 1,0)) approved_count, SUM(amount) trans_total_amount,
SUM(if(state="approved", amount, 0)) approved_total_amount from Transactions
GROUP BY 1,2
