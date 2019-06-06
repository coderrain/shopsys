const express = require('express');
const app = express();
const config = require('./config')
const index = require('./api/index')
const user = require('./api/user')

app.use('/api/',index)
app.use('/api/user',user)

app.listen(config.port, ()=>{
    console.log(`服务启动了访问http://localhost:${config.port}`)
})