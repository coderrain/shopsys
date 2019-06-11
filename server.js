const express = require('express');
const app = express();
const config = require('./config')
const index = require('./api/index')
const user = require('./api/user')
const upload = require('./api/upload')
const sessionMiddleware = require('./tools/session')
const bodyParser = require('body-parser')

app.use(sessionMiddleware)
app.use(bodyParser())

app.use(express.static('./'))

app.use('/api/',index)
app.use('/api/user',user)
app.use('/api/upload',upload)

app.listen(config.port, ()=>{
    console.log(`服务启动了访问http://localhost:${config.port}`)
})