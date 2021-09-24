// 创建路由模块

// 导入express
const express=require('express')
// 创建路由对象
const router=express.Router()
router.get('/user',(req,res)=>{
    res.send('good morning')
})
router.post('/user',(req,res)=>{
    res.send('good afternoon')
})

// 导出路由对象
module.exports=router