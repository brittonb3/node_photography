// require express
const express = require('express');

// create our router object
const router = express.Router();

// export out Router
module.exports = router;

// router for our homepage
router.get('/', function(req, res) {
  res.send('hello home');
});

// router for portfolio
router.get('/portfolio', function(req, res) {
  res.send('hello portfolio')
});

// routes for our about page
router.get('/about', function(req, res) {
  res.send('hello about');
})


// router for contact
router.get('/contact', function(req, res) {
  res.send('hello contact')
});
router.post('/contact');
