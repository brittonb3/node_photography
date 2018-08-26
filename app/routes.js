// require express
const express = require('express');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');


// create our router object
const router = express.Router();

// export out Router
module.exports = router;

// router for our homepage
router.get('/', function(req, res) {
  res.render('pages/index');
});

router.get('/portfolio', function(req, res) {
  res.render('pages/portfolio');
});

router.get('/blog', function(req, res) {
  res.render('pages/blog');
});

router.get('/prints', function(req, res) {
  res.render('pages/prints');
});

// routes for our about page
router.get('/about', function(req, res) {
  res.render('pages/about');
});


// router for contact
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.get('/contact_sent',function(req, res){
  res.render('pages/contact_sent');
})
router.post('/contact', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
        host: 'smtp.dreamhost.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.mailer_user, // generated ethereal user
            pass: process.env.mailer_pass// generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"greatbritton" <britton@greatbrittonphotography.com>', // sender address
        to: 'britton@greatbrittonphotography.com', // list of receivers
        subject: 'new contact', // Subject line
        text: 'new message', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('pages/contact_sent', )
    });
});
