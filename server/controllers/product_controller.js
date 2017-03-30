var mongoose = require('mongoose')
var Product1 = mongoose.model('Product1')
// var Product2 = mongoose.model('Product2')
// var Product3 = mongoose.model('Product3')
var User = mongoose.model('User')

module.exports = (function(){
  return {
    create: function(req, res){
      var user_id = req.session.user._id
      var user_name = req.session.user.name
      console.log(req.body.bid)
      var newProduct1 = new Product1({
        bid : req.body.bid,
        highest_bid : req.body.bid
      })
      newProduct1._user = user_id
      newProduct1.bid_user = user_name
      newProduct1.highest_bidder = user_name
      newProduct1.save(function(err,data){
        if(err){
          console.log(err)
        }else{
          User.update({_id:user_id}, {$push: {'Product1':newProduct1}}, function(err){

          })
          Product1.update({}, {highest_bid:req.body.bid}, function(err){

          })
          console.log(newProduct1,"first pass: New newProduct1 added")
          res.json(data)
        }
      })
      Product1.update({}, {highest_bid:req.body.bid})
    },

    show: function(req,res){
      Product1.find({}, function(err, product){
        res.json(product)
      })
    },

    delete: function(req, res){
      Product1.remove({}, function(err){
          if(err){
              return res.json(err)
          }else{
              return res.json("Cleared Product 1")
          }
      })
    },
    
  }
})()
