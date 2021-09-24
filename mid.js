// 中间件:特指业务流程的中间处理环节
// 中间件的作用:多个中间件之间,共享同一个req和res,可以在上游的中间件中统一为req或res对象添加自定义属性或方法,供下游的中间件或路由使用
// 中间件要在路由注册之前注册
const express=require('express')
const app=express()
const mw=function(req,res,next){
    console.log('调用了第一个全局中间件');
    const time=Date.now()
    // 给req对象挂载shijian自定义属性
    req.shijian=time
    // 把流转关系转交给下一个中间件或路由
    next()
}

// 把mw注册为全局生效的中间件
app.use(mw)

// 多个中间件依次执行
app.use(function(req,res,next){
 console.log('调用了第二个全局中间件');
 next()
})

app.get('/user',(req,res)=>{
    console.log('调用了/user路由');
    res.send('hello world'+req.shijian)
})


app.listen(8356,()=>{
    console.log('server is running');
})