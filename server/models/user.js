var mongoose = require('mongoose')
// console.log(mongoose)
var Schema = mongoose.Schema
var UserSchema = new Schema({
  name : {type:String, required: true, maxlength:15, minlength:4},
  product_1 : [{type: mongoose.Schema.Types.ObjectId, ref: "Product1"}],
  product_2 : [{type: mongoose.Schema.Types.ObjectId, ref: "Product2"}],
  product_3 : [{type: mongoose.Schema.Types.ObjectId, ref: "Product3"}]
},{timestamp : true})

mongoose.model('User', UserSchema)
