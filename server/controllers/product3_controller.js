var mongoose = require('mongoose')
// var Product1 = mongoose.model('Product1')
// var product2 = mongoose.model('product2')
var Product3 = mongoose.model('Product3')
var User = mongoose.model('User')

module.exports = (function(){
  return {
    create: function(req, res){
      var user_id = req.session.user._id
      var user_name = req.session.user.name
      console.log(req.body.bid)
      var newProduct3 = new Product3({
        bid : req.body.bid,
        highest_bid : req.body.bid
      })

      newProduct3._user = user_id
      newProduct3.bid_user = user_name
      newProduct3.highest_bidder = user_name
      newProduct3.save(function(err,data){
        if(err){
          console.log(err)
        }else{
          User.update({_id:user_id}, {$push: {'product3':newProduct3}}, function(err){
          })
          Product3.update({}, {highest_bid:req.body.bid}, function(err){

          })
          console.log(newProduct3,"first pass: New newproduct3 added")
          res.json(data)
        }
      })
    },

    show: function(req,res){
      Product3.find({}, function(err, product){
        res.json(product)
      })
    },

    delete: function(req, res){
      Product3.remove({}, function(err){
          if(err){
              return res.json(err)
          }else{
              return res.json("Cleared Product 3")
          }
      })
    },
  }
})()
