const express = require('express');
let router = express.Router();
const fsStore = require('../tools/fsStore')



// /login?username=张三
router.post('/login', (req,res,next)=>{
    let body = req.body;
    if(!body.username){
        return res.json({code:0,msg:'参数必须填写'})
    }
    if(!body.code || body.code != req.session.codeStr){
        return res.json({code:0,msg:'验证码不对'})
    }
    delete body.code;
    fsStore.fetch("./sql/user.json", body).then(result=>{
        if(result.data.length<1){
            return res.json({
                code:0,
                msg:'不存在'
            })
        }else{
            req.session.username = result.data[0].username
            res.json(result)
        }
        
    })
})

router.get('/code', (req,res,next)=>{
    let str = '1234567890qwertyuiopasdghjkzxcvbnml';
    let codeStr = '';
    for(let i=0;i<4;i++){
        codeStr += str[parseInt(Math.random()*str.length)]
    }
    req.session.codeStr = codeStr;
    res.json(codeStr)
})

router.post('/reg', (req,res,next)=>{
    let body = req.body;
    if(!body.code || body.code != req.session.codeStr){
        return res.json({code:0,msg:'验证码不对'})
    }
    fsStore.fetch("./sql/user.json", {username: body.username}).then(result=>{
        let {data} = result;
        if(data.length > 0){
            return res.json({code:0, msg: '存在了'})
        }else{
            fsStore.add("./sql/user.json", body).then(result=>{
                let {data} = result;
                res.json(data[data.length-1])
            })
        }
    })
})

/*router.use((req,res,next)=>{
    if(req.session.username){
        next()
    }else{
        res.json({code:1,msg:'请登录后操作'})
    }
})*/

router.get('/', (req,res,next)=>{
    let { page, pageSize } = req.query;
    console.log(page, pageSize) 
    fsStore.fetch("./sql/user.json").then(data=>{
        let result = data.data;
        result = result.slice((page-1)*pageSize || 0, page*pageSize || 5)
        res.json({
            code:1,
            data:result,
            count: data.data.length
        })
    })
})


router.post('/resetname', (req,res,next)=>{
    fsStore.update("./sql/user.json", {username: req.session.username}, req.body).then(result=>{
        let {data} =result;
        res.json(data[data.length-1])
    })
})

router.post('/update', (req,res,next)=>{
    let body = req.body;
    fsStore.update("./sql/user.json", {key:'id', val:body.id}, req.body).then(result=>{
        let {data} =result;
        data = data.filter(item=>item.id==body.id)
        res.json({code:1,data:data[0]})
    })
})

router.get('/del', (req,res,next)=>{
    fsStore.del("./sql/user.json", {key:'id', val:req.query.id}).then(result=>{
        res.json({code:1})
    })
})

router.get('/add', (req,res,next)=>{
    fsStore.add("./sql/user.json", req.query).then(result=>{
        res.json({code:1})
    })
})

module.exports = router;