
// require('./js/jquery-3.3.1.min.js');
// import $ from 'jquery';
// const jquery = require('jquery');

try {
    window.$ = window.jQuery = require('jquery');
    require('popper.js');
    require('bootstrap');

    require('./js/mona.bundle');
    require('./js/default-assets/active.js');
    
} catch (e) { 
    console.log(e) 
}




