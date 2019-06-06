const express = require('express');
let router = express.Router();
const fsStore = require('../tools/fsStore')


router.get('/', (req,res,next)=>{
    fsStore.fetch("./sql/user.json").then(data=>{
        res.json(data)
    })
})

// /login?username=张三
router.get('/login', (req,res,next)=>{
    let query = req.query;
    fsStore.fetch("./sql/user.json", query).then(data=>{
        res.json(data)
    })
})

module.exports = router;