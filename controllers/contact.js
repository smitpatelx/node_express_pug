var Contact = require('../models/contact');
var mongoose = require('mongoose');

exports.createContact = function(req,res) {
    const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    contact.save().then(
    result => {
        console.log(result);
        res.render('contact', { title: 'Contact', successMessage: 'Message sent successfully !'});
    })
    .catch(err => console.log(err));
    
}

exports.showForm = function(req,res) {
    res.render('contact', { title: 'Contact'});
}