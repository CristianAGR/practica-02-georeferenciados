var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Campus Site & Maps' });
});

router.get('/about', function(req,res, next){
  res.send('Info of this page')
})
router.get('/gotousers', function(req,res, next){
  res.redirect('/users')
})
router.get('/gmap', function(req,res, next){
  res.render('gmap', { title: 'Google Maps' });
})

module.exports = router;
