const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive')

const config = require('./config.js'),
    adminCtrl = require('./adminCtrl'),
    frontCtrl = require('./frontCtrl'),
    AWS = require('aws-sdk'),
    port = config.port


exports = module.exports = {};

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/../public'))

//------------------Massive Setup----------------
massive(config.massiveConnection).then(db => {
    app.set('db', db)
    console.log("Database connected");
})

//--------------------AWS Setup----------------
AWS.config.update({
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
    region: config.aws.region
});
const S3= new AWS.S3();
const bucket = config.bucket;

exports.sendPics = (pic, cb) => {
    let buf = new Buffer(pic.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

    let params = {
        Bucket: bucketName,
        Body: buf,
        Key: pic.imageName,
        ContentType: `image/${pic.imageExtension}`,
        ACL: `public-read`
    };
    return S3.upload(params, (err, data) => {
        if (err) return err;
        cb(data);
    })
}

//--------------------Blog Endpoints----------------------
app.get('/api/blogs', adminCtrl.getBlogs)
app.get('/api/blogs/published', adminCtrl.getPublishedBlogs)
app.get('/api/blog/:id', adminCtrl.getBlog)
app.post('/api/blog', adminCtrl.addBlog)
app.put('/api/blog/:id', adminCtrl.editBlog)
app.delete('/api/blog/:id', adminCtrl.deleteBlog)

app.put('/api/blogs/publish', adminCtrl.publish)
app.put('/api/blogs/unpublish', adminCtrl.unpublish)


//-----Tag Endpoints-----
app.get('/api/blogtags/:id', adminCtrl.getBlogTags)

app.get('/api/blogsbytag/:id', frontCtrl.getBlogsByTag)

app.listen(port, _ => console.log(`${new Date()} -> Listening on port: ${port}`))