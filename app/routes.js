// require express
const express = require('express');
const path = require('path');

// create our router object
const router = express.Router();

// export out Router
module.exports = router;

// router for our homepage
router.get('/', function(req, res) {
  res.render('pages/index');
});

// router for portfolio
router.get('/portfolio', function(req, res) {
  res.render('pages/portfolio');
});

// routes for our about page
router.get('/about', function(req, res) {
  res.render('pages/about');
})


// router for contact
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});
router.post('/contact');
