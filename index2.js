require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {
    console.log(req.body);

    nodemailer.createTestAccount((err, account) => {

    const htmlEmail =
    '<div> <ul> <li>Name: ' + req.body.name + '</li><li>Title: ' + req.body.title + '</li><li>Email: ' + req.body.email + '</li> <li>Phone: ' + req.body.phone + '</li></ul> <h3>Message</h3>  <p> ' + req.body.message + '</p> </div>'

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.PASSWORD,
            pass: process.env.EMAIL
        }
    });

    let mailOptions = {
        from: 'czarkoootest@gmail.com',
        to: 'czarkooo@gmail.com',
        subject: "PORTFOLIO",
        text: req.body.message,
        html: htmlEmail
    };

    transporter.sendMail(mailOptions, function(err, data){
        if (err){
            console.log("error", err)
        } else {
            console.log("Email SENT!!!")
        }
    });


    });
});

const PORT = process.env.PORT || 4500

app.listen(PORT, () => {
    console.log('Server listening on port '+ PORT )
})


