const express=require('express')
const router=express.Router()

// 编写get接口
router.get('/get',(req,res)=>{
    // 获取客户端发送到服务器上的数据
    const query=req.query
    // 调用方法向客户端响应处理结果
    res.send({
        status:0,//0 处理成功 1 处理失败
        msg:'get请求成功',
        data:query //响应给客户端的数据
    })
})

// 编写post接口
router.post('/post',(req,res)=>{
    // 拿到客户端的请求体的数据
     const body=req.body
    res.send({
        status:0,
        msg:'post请求成功',
        data:body
    })
})

// 编写delete接口
router.delete('/delete',(req,res)=>{
    res.send({
        status:0,
        msg:'delete请求成功'
    })
})

module.exports=router