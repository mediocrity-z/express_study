// 导入express
const e=require('express')
// 创建服务器
const server=e()
// 启动服务器
server.listen(8880,()=>{
    console.log('express server running');
})

// 监听客户端的get请求
// 参数1 客户端请求的url地址，参数2 请求对应的处理函数
// req 请求对象 res 响应对象
server.get('/user',(req,res)=>{
// 调用express的res.send方法，向客户端响应一个json对象
res.send({name:'hc',age:20})
})

// 监听客户端的post请求，与get请求类似
server.post('/user',(req,res)=>{
    // 向客户端响应一个文本字符串
res.send('请求成功')
})

// 获取url中携带的查询参数
// req.query默认是空对象，当客户端携带了查询参数时，可通过req.query访问到
server.get('/',(req,res)=>{
res.send(res.query)
})

// 通过req.params对象，可以访问到url中通过：匹配到的动态参数
server.get('/user/:id/:name',(req,res)=>{
    res.send(req.params)
})

// express托管静态资源：express.static()可以创建一个静态资源服务器，将目录下的静态文件对外开放访问，但目录名不会出现在url中

server.use(e.static('./advertice'))
//127.0.0.1:8880/五秒钟倒计时广告.html

// 如果是多个静态资源目录需要托管，需要多次调用express.static()方法，访问静态资源文件时，该方法会根据目录的添加顺序查找所需的文件

// 如果希望在托管的静态资源访问路径之前挂载路径前缀
// server.use('/advertice',e.static('./advertice'))

