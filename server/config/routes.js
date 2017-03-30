var session = require('./../controllers/user_controller.js')
var productsession = require('./../controllers/product_controller.js')
var productsession2 = require('./../controllers/product2_controller.js')
var productsession3 = require('./../controllers/product3_controller.js')
module.exports = function(app){
  app.post('/login', function(req, res){
    session.login(req, res)
  })

  app.get('/getuser', function(req, res){
    session.getUser(req, res)
  })

  app.get('/logout', function(req, res){
    session.logOut(req, res)
  })

  app.get('/getproducts', function(req, res){
    productsession.show(req, res)
  })

  app.get('/getproducts2', function(req, res){
    productsession2.show(req, res)
  })

  app.get('/getproducts3', function(req, res){
    productsession3.show(req, res)
  })

  app.post('/create', function(req, res){
    productsession.create(req, res)
  })

  app.post('/create2', function(req, res){
    productsession2.create(req, res)
  })

  app.post('/create3', function(req, res){
    productsession3.create(req, res)
  })

  app.post('/product1/delete', function(req, res){
    productsession.delete(req, res)
  })

  app.post('/product2/delete', function(req, res){
    productsession2.delete(req, res)
  })

  app.post('/product3/delete', function(req, res){
    productsession3.delete(req, res)
  })

}
