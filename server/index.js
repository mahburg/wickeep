const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')

const config = require('./config.js')
    , adminCtrl = require('./adminCtrl')
    , frontCtrl = require('./frontCtrl')
    , port = config.port

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/../public'))

massive(config.massiveConnection).then(db=>{
    app.set('db', db)
    console.log("Database connected");
})

//--------------------Blog Endpoints----------------------
app.get('/api/blogs', adminCtrl.getBlogs)
app.get('/api/blogs/published', adminCtrl.getPublishedBlogs)
app.get('/api/blog/:id', adminCtrl.getBlog)
app.post('/api/blog', adminCtrl.addBlog)
app.put('/api/blog/:id', adminCtrl.editBlog)
app.delete('/api/blog/:id', adminCtrl.deleteBlog)

app.put('/api/blogs/publish', adminCtrl.editBlog)
app.put('/api/blogs/unpublish', adminCtrl.editBlog)


//-----Tag Endpoints-----
app.get('/api/blogtags/:id', adminCtrl.getBlogTags)

app.get('/api/blogsbytag/:id', frontCtrl.getBlogsByTag)

app.listen(port, _=>console.log(`${new Date()} -> Listening on port: ${port}`))