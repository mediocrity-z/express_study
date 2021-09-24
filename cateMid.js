// 中间件的分类:
// 应用级别的中间件:通过app.use,app.get,app.post绑定到app实例上的中间件

// 路由级别的中间件:绑定到express.Router()实例上的中间件,即用express.Router()创建了一个路由router,再用router.use方法注册的中间件,
// 但是它的用法跟应用级别的中间件差不多

// 错误级别的中间件:用来捕获整个项目中发生的异常错误,从而防止项目异常崩溃
// 格式:它的function处理函数中,必须有4个形参,依次是err,req,res,next
// 错误级别的中间件必须注册在路由之后,其他的中间件都必须在路由之前注册
const express=require('express')
const app=express()
// app.get('/',function(req,res){
//     throw new Error('服务器错误')
//     res.send('hello world')//无法执行该语句
// })
// app.use(function(err,req,res,next){
//     console.log(err.message);//打印错误:服务器错误
//     res.send('error '+err.message) //通知客户端服务器错误
// })


// express内置的中间件:express.static()快速托管静态资源,express.json()解析JSON格式的请求体数据,express.urlencoded()解析URL-encoded格式的请求体数据

// 第三方中间件:第三方开发的中间件,可以提高项目的开发效率
// npm i 包名
// require导入中间件
// app.use()使用中间件
// 例如:body-parser中间件解析req请求对象

const bodyParser=require('bodyParser')
app.use(bodyParser)

app.post('/user',(req,res)=>{
res.send('ok')
})

app.listen(8500,()=>{
    console.log('server is running');
})