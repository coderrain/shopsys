const express = require('express');
let router = express.Router();
const fs = require('fs');
const fsStore = require('../tools/fsStore')

router.get('/shopMark', (req,res,next)=>{
    fsStore.fetch('./sql/shop.json').then(data=>{
        res.json(data)
    })
})

router.get('/search', (req,res,next)=>{
    let query = req.query;
    fsStore.fetch('./sql/shopItem.json',query).then(data=>{
        res.json(data)
    })
})

router.get('/shopList', (req,res,next)=>{
    let query = req.query;
    fsStore.fetch('./sql/shopItem.json',query).then(data=>{
        res.json(data)
    })
})


router.get('/ad', (req,res,next)=>{
    fsStore.fetch('./sql/ad.json').then(data=>{
        res.json(data)
    })
})

module.exports = router;