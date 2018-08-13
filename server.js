const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// use ejs and express layouts
app.set('view engine', 'ejs')
app.use(expressLayouts);

// router our app
const router = require('./app/routes');
app.use('/', router);

// set static files (css and images, ect) location
app.use(express.static(__dirname + '/public'));

// start server
app.listen(port, function() {
  console.log('app started');
})
