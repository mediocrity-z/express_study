// express中的路由：客户端的请求与服务器处理函数之间的映射关系
// 路由分为请求类型，请求的url，处理函数
// app.METHOD(PATH,HANDLER)
// 每当一个请求到达服务器之后，需要先经过路由器的匹配，匹配成功之后才会调用对应的处理函数

// 即在匹配时，会按照路由的顺序进行匹配，如果请求类型和url同时匹配成功，则Express会将这次请求交给对应的处理函数进行处理



const express=require('express')
const app=express()
// 路由的基本用法：
app.get('/',(req,res)=>{
    res.send('hello')
})
app.post('/',(req,res)=>{
    res.send('world')
})

// 导入路由模块
const userRouter=require('./router1')
// 使用app.use()方法注册路由模块(app.use函数的作用:注册全局中间件)
// app.use(userRouter)
// app.use也可以为路由添加统一的访问前缀
app.use('/api',userRouter)

app.listen(8881,()=>{
    console.log('server running');
})