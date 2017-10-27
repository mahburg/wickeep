exports = module.exports = {}

exports.addBlog = function(req, res) {
    let db = req.app.get('db');
    let {title, author, content, pic1, tags} = req.body;

    // Add async await?
    db.blog.post_blog([title, author, content, pic1]).then(resp=>{
        let blogId = resp[0].id;
        tags.forEach((tag)=> {
            db.blog.post_tag(tag).then(response=>{
                db.blog.get_tag_id(tag).then(idResp=>{
                    let id = idResp[0].id;
                    db.blog.post_blog_tag([blogId, id])
                }).catch(console.log)
            }).catch(console.log)
        });
        res.status(200).send('blog posted')
    }).catch(console.log)
}

exports.getBlogs = function(req,res) {
    let db = req.app.get('db');
    db.blog.get_all_blogposts().then(resp=>{
        res.status(200).send(resp);
    })
}

exports.getBlog = function(req,res) {
    let db = req.app.get('db');
    db.blog.get_blogpost_by_id([req.params.id]).then(resp=>{
        res.status(200).send(resp);
    })
}

exports.editBlog = function(req,res) {
    let db = req.app.get('db');
    db.blog.update_blogpost([]).then(resp=>{
        res.status(200).send(resp);
    })
    res.status(200).send('bene')
}

exports.deleteBlog = function(req,res) {
    let db = req.app.get('db');
    db.blog.delete_blogpost([]).then(resp=>{
        res.status(200).send(resp);
    })
    res.status(200).send('bene')
}

exports.getBlogTags = function(req, res) {
    let db = req.app.get('db');
    console.log('getting tags');
    db.blog.get_blog_tags([req.params.id]).then(resp=>{
        console.log(resp)
        res.status(200).send(resp);
    }).catch(console.log)
}