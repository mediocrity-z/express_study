const express=require('express')
const app=express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

// 必须在cors中间件之前配置jsonp接口
app.get('/api/jsonp',(req,res)=>{
    // 得到客户端发送的回调函数的名称
    const funcname=req.query.callback
        //   定义发送给客户端的数据对象
        const data={name:'何超',age:20}
        // 拼接起来
        const str=`${funcname}(${JSON.stringify(data)})`
        res.send(str)
})

const cors=require('cors')
app.use(cors())
// 导入api路由模块
const apiRouter=require('./apiRouter')
app.use('/api',apiRouter)

app.listen(8501,()=>{
    console.log('server is running');
})