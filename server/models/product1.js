var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Product1Schema = new Schema({
  bid : {type:Number, required: true},
  bid_user : String,
  highest_bid : {type: Number, default:0},
  highest_bidder : String,
  _user : [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
},{timestamp : true})

mongoose.model('Product1', Product1Schema)
