-- Write your MySQL query statement below

SELECT distinct author_id as id from Views
Where author_id = viewer_id
Order by author_id
