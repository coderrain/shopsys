const express = require('express');
let router = express.Router();
const fs = require('fs');
const fsStore = require('../tools/fsStore')

router.get('/shopMark', (req,res,next)=>{
    /*let query = req.query
    fsStore.fetch('./sql/shop.json',query).then(data=>{
        res.json(data)
    })*/
    let query = req.query;
    let page = query.page || 1;
    let pageSize = query.pageSize || 1000;
    fsStore.fetch('./sql/shop.json').then(result=>{
        let {code, data} = result;
        data = data.slice((page-1)*pageSize,page*pageSize);
        console.log((page-1)*pageSize ,page*pageSize)
        res.json({
            code:1,
            data
        })
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

router.get('/shopListPage', (req,res,next)=>{
    let query = req.query;
    let page = query.page || 1;
    let pageSize = query.pageSize || 1000;
    /*delete query.page;
    delete query.pageSize;*/
    fsStore.fetch('./sql/shopItem.json').then(result=>{
        let {code, data} = result;
        data = data.slice((page-1)*pageSize ,page*pageSize);
        console.log((page-1)*pageSize ,page*pageSize)
        res.json({
            code:1,
            data
        })
    })
})


router.get('/ad', (req,res,next)=>{
    let query = req.query;
    fsStore.fetch('./sql/ad.json',query).then(data=>{
        res.json(data)
    })
})




module.exports = router;