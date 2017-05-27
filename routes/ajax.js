var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var model=require('./model')
var Demo=model.Demo
mongoose.connect('mongodb://localhost/monkey')

router.get('/getInfo', (req, res, next) => {
    Demo.find((err, docs) => {
        if (err) res.send(err)

        res.send(docs)
    })
})

router.post('/addInfo', (req, res, next) => {
    var demo = new Demo({
        uid: req.body.uid,
        title: req.body.title,
        content:req.body.content
    })
    demo.save((err,doc) => {
        if (err) res.send(err)
        res.senddocs
    })
})

router.post('/deleInfo', (req, res, next) => {
    var uid = req.body.uid
    console.log(uid)
    console.log(typeof uid)
    if (uid) {
        Demo.remove({uid:uid},(err,docs) => {
            if(err)res.send(err)
            res.senddocs
        })
    }
})





module.exports = router