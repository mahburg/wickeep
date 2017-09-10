CREATE TABLE blogposts (
    id SERIAL PRIMARY KEY,
    title TEXT,
    author TEXT,
    content TEXT,
    file1 TEXT,
    file2 TEXT,
    pic1 TEXT,
    pic2 TEXT,
    created_ts TIMESTAMP
)