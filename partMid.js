// 局部生效的中间件:不能使用app.use去定义;并且局部中间件只在当前路由中生效,不会影响到别的路由
const express=require('express')
const app=express()
const mw=function(req,res,next){
    console.log('中间件函数');
    next()
}
// 局部中间件可使用多个,例如mw1,mw2依次写入路由中
app.get('/',mw,function(req,res){
    res.send('hello')
})
app.get('/user',function(req,res){
    res.send('world')
})

app.listen(8357,()=>{
    console.log('server is running');
})