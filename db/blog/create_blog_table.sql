CREATE TABLE blogposts (
    id SERIAL PRIMARY KEY,
    title TEXT,
    author VARCHAR,
    content TEXT,
    file1 VARCHAR,
    file2 VARCHAR,
    pic1 VARCHAR,
    pic2 VARCHAR,
    created_ts TIMESTAMP
)