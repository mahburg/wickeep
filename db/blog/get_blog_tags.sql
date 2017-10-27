SELECT tag FROM tags t
JOIN blogtags b on b.tagid = t.id
WHERE b.blogid = $1;