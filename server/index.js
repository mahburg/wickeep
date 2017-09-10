const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')

const config = require('./config.js')
    , adminCtrl = require('./adminCtrl')
    , port = config.port

const app = express();

app.use(bodyParser.json());
app.use(cors());

//--------------------Blog Endpoints----------------------
app.get('/api/blogs', adminCtrl.getBlogs)
app.get('/api/blog/:id', adminCtrl.getBlog)
app.post('/api/blog', adminCtrl.addBlog)
app.put('/api/blog/:id', adminCtrl.editBlog)
app.delete('/api/blog/:id', adminCtrl.deleteBlog)


app.listen(port, _=>console.log(`${new Date()} -> Listening on port: ${port}`))