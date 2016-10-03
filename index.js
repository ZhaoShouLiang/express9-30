// 服务器代码--------------------接收请求
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// db.once('open',function(){
//   console.log('success')
// })
 app.get('/write', function (req, res) {
  var page ="<form method='post' action='/posts'>"+
                "<input type = 'text' name ='title'/>"+
                "<input type = 'submit'/>"+
            "</form>"
  console.log('GET/posts')
  res.send(page)
 })
  //读取所有文章
 app.get('/posts/:id', function (req, res) {
   console.log('get /posts/:id1')
   res.send('GET /posts/:id2')
 })
  //读取一篇文章
 app.put('/posts/:id', function (req, res) {
   console.log('Put /posts/:id')
   res.send('PUT /posts/:id')
 })
  //更新一篇文章
 app.post('/posts/', function (req, res) {
   res.send('the post title is: ' + req.body.title)
 })
 //发布一篇文章
 app.delete('/posts/:id', function (req, res) {
   console.log('DELETE /posts/:id')
   res.send('DELETE /posts/:id')
 })
  //删除一篇文章
module.exports=function(app){
  // get all posts
}





app.listen(3000,function(){
  console.log('running on port 3000... vist http:localhost:3000')
})
