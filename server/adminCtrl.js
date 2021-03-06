exports = module.exports = {}

exports.addBlog = function (req, res) {
    let db = req.app.get('db');
    let { title, author, content, pic1, tags } = req.body;

    db.blog.post_blog([title, author, content, pic1]).then(resp => {
        let blogId = resp[0].id;
        let postedTags = []

        tags.forEach((tag) => {
            db.blog.post_tag(tag).then(response => {
                db.blog.get_tag_id(tag).then(idResp => {
                    let id = idResp[0].id;
                    postedTags.push( db.blog.post_blog_tag([blogId, id]))
                }).catch(console.log)
            }).catch(console.log)
        });

        Promise.all(postedTags).then(responses=>{
            res.status(200).send('blog posted')
        }).catch(console.log)
    }).catch(console.log)
}

exports.getBlogs = function (req, res) {
    let db = req.app.get('db');
    db.blog.get_all_blogposts().then(resp => {
        res.status(200).send(resp);
    })
}

exports.getPublishedBlogs = function (req, res) {
    let db = req.app.get('db');
    console.log('published...')
    db.blog.get_published_blogs().then(resp => {
        res.status(200).send(resp);
    })
}

exports.getBlog = function (req, res) {
    let db = req.app.get('db');
    db.blog.get_blogpost_by_id([req.params.id]).then(resp => {
        res.status(200).send(resp);
    })
}

exports.editBlog = function (req, res) {
    let db = req.app.get('db');
    db.blog.update_blogpost([]).then(resp => {
        res.status(200).send(resp);
    })
    res.status(200).send('bene')
}

exports.deleteBlog = function (req, res) {
    let db = req.app.get('db');
    db.blog.delete_blogpost([req.params.id]).then(resp => {
        res.status(200).send(resp);
    })
}

exports.getBlogTags = function (req, res) {
    let db = req.app.get('db');
    console.log('getting tags');
    db.blog.get_blog_tags([req.params.id]).then(resp => {
        console.log(resp)
        res.status(200).send(resp);
    }).catch(console.log)
}

// Promise.all()?
exports.publish = async function (req, res) {
    let db = req.app.get('db');
    let stack = [];
    console.log(req.body)
    req.body.forEach(blog=> {
        stack.push( db.blog.publish_blog(blog))
    });
    Promise.all(stack).then(responses=>{
        console.log(responses)
        res.status(200).send('blog(s) published')
    }).catch(console.log)
}

exports.unpublish = function(req, res) {
    let db = req.app.get('db');
    let stack = [];
    req.body.forEach(blog=> {
        stack.push(db.blog.unpublish_blog(blog))
    });
    Promise.all(stack).then(responses=>{
        console.log(responses)
        res.status(200).send('blog(s) unpublished')
    }).catch(console.log)
}