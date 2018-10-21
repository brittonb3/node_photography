const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// use ejs and express layouts
app.set('view engine', 'ejs')
app.use(expressLayouts);

//body parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router our app
const router = require('./public/app.js');
app.use('/', router);

// set static files (css and images, ect) location
app.use(express.static(__dirname + '/assets'));

// start server
app.listen(port, function() {
  console.log('app started');
})
