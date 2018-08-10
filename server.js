const express = require('express');
const app = express();
const port = 3000;

// router our app
const router = require('./app/routes');
app.use('/', router);

// start server
app.listen(port, function() {
  console.log('app started');
})
