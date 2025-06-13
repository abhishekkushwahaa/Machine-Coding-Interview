-- Write your MySQL query statement below

SELECT r.contest_id,
ROUND(COUNT(DISTINCT r.user_id)*100/(SELECT count(*) from users), 2) as percentage
FROM Register r
GROUP BY r.contest_id
ORDER BY percentage desc, r.contest_id asc;
