exports = module.exports = {} 

exports.getBlogsByTag = function(req, res) {
    let db = req.app.get('db');
    db.blog.get_blogs_by_tagid([req.params.id]).then(resp=>{
        console.log(resp)
        res.status(200).send(resp);
    }).catch(console.log)
}