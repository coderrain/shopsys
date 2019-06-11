const express = require('express');
let router = express.Router();
const fsStore = require('../tools/fsStore')
var multer  = require('multer')
var upload = multer({ dest: 'api/uploads/' })


router.post('/profile', upload.single('avatar'), function (req, res, next) {
  let body = req.body;
  let path = req.file.path;
  path = path.replace(/[\\]+/g,'/');
  fsStore.update("./sql/user.json", 
    {key:'id', val:body.id}, 
    {imgUrl: '/'+path})
  .then(result=>{
      res.json({code:1,imgUrl:'/'+path})
  })
})


module.exports = router;