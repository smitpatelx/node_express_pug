const express = require('express');
const multer = require('multer');

const diskstorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/img/bg-img/');
  },
  filename: function(req, file, cb) {
    var newName = (new Date().toISOString()).replace(/[^a-zA-Z0-9]/g, "");
    cb(null,  newName + file.originalname);
  }
})

const fileFilter = function(req, file, cb) {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ){
    cb(null, true);
  } else {
    cb(new Error('File type not expected'), false);
  }
}
const upload = multer({
    storage: diskstorage,
    limits:{
      fieldSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

var router = express.Router();
var Projects_controller = require('../controllers/projects');
var Contact_controller = require('../controllers/contact');
// var get_data = require('../src/data/projects.json');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/projects', Projects_controller.getProjects);
router.get('/projects/ca', Projects_controller.defaultProjects);
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/contact', Contact_controller.showForm);

router.post('/projects', upload.single('file') , Projects_controller.create );
router.post('/contact', Contact_controller.createContact );

module.exports = router;
