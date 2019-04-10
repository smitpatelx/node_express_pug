const Contact = require('../models/contact');
const mongoose = require('mongoose');
const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'testemailsmtp99@gmail.com',
        pass: 'smitpatelx'
    }
});
    
exports.createContact = function(req,res) {
    const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    let mailOptions = {
        from: '"'+req.body.name+'" <'+req.body.email+'>', // sender address
        to: 'testemailsmtp99@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.message, // plain text body
        html: '<b>'+req.body.message+'</b>' // html body
    };
    
    

    contact.save().then(
    result => {
        // Send your email and handle the error accordingly.
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            } else {
                console.log('Message %s sent: %s', info.messageId, info.response);
                throw Error("Email Error: ", error)
            }
        });
        console.log(result);
        res.render('contact', { title: 'Contact', successMessage: 'Message sent successfully !'});
    })
    .catch(err => console.log(err));
    
}

exports.showForm = function(req,res) {
    res.render('contact', { title: 'Contact'});
}