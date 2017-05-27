var mongoose = require('mongoose')
var Schema = mongoose.Schema
var demoSchema = new Schema({
    uid: String,
    title: String,
    content: String,
    creatTime:{type:Date,default:Date.now}
})

exports.Demo = mongoose.model('Demo', demoSchema)