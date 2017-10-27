SELECT bp.id bp.title bp.author bp.content FROM blogposts bp
JOIN blogtags bt ON bt.blogID = bp.id
WHERE bt.tagID = $1;