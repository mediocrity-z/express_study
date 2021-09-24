// 导入内置URLSearchParams模块
const { URLSearchParams } = require('url')
// 自定义中间件解析post请求提交到服务器的数据
function bodyParser(req,res,next){
    // 定义中间件的具体业务逻辑
    // 如果客户端发送过来的数据量比较大无法一次性发送，则客户端会切割数据分批发送
    var str=''
    // 监听req的data事件拼接字符串数据
    req.on('data',(chunk)=>{
        str+=chunk
    })

    // 监听req的end事件(请求体发送完后自动触发)
    req.on('end',()=>{
        // 把字符串的数据解析成对象格式
            const body=new URLSearchParams(str)
            console.log(body);
            req.body=body
            next()
    })
}
module.exports=bodyParser