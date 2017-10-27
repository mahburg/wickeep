INSERT INTO blogposts
-- (title, author, content, file1, file2, pic1, pic2, created_ts)
(title, author, content, pic1, created_ts)
VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
RETURNING id;