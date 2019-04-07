var Projects = require('../models/projects');
var mongoose = require('mongoose');
const multer = require('multer');

exports.getProjects = function(req,res) {
    Projects.find({})
    .then(projects => {
      res.render('projects', { title: 'Project', data: projects});
    })
    .catch(err => {
        console.log('Error getting projects : ',err);
        res.status(203).json({
            message:'Error: '+err
        });
    });
}


exports.create = function(req,res) {
    var details = [req.body.details,'no details', 'no details']

    const projects = new Projects({
        _id: new mongoose.Types.ObjectId,
        src: '/img/bg-img/' + req.file.filename,
        author: req.body.author,
        detalis: details
    });

    projects.save().then(
    result => {
        Projects.find({})
        .then(pro => {
            res.render('projects', { title: 'Project', data: pro, successMessage: 'Project Added successfully'});
        })
        .catch(err => console.log('Error getting projects : ',err));
    })
    .catch(err => {
        console.log(err);
        res.status(203).json({
            message:'Error: '+err,
            body: req.body,
            file: req.file
        });
    });

}

exports.defaultProjects = function(req,res) {
    Projects.deleteMany({}).exec();
    var allprojects = require('../src/data/projects.json');
    var errors = [];

    for(var key in allprojects) {
        var data = allprojects[key];
            
        const projects = new Projects({
            _id: new mongoose.Types.ObjectId(),
            src: data.src,
            author: data.author,
            detalis: data.detalis
        });
    
        projects.save().then(
        result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err)
            errors.push(err);
        });
            
    };
    
    if(errors.length == 0){
        res.status(201).json({
            message:'All projects resets.',
            allprojects
        });
    } else {
        res.status(202).json({
            message:'Error occured while resetting projects'
        });
    }
}