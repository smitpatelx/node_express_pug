const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/index.js', 'public/js/main.js')
    .sass('src/scss/style.scss', 'public/css/main.css')
    .setPublicPath('public');

mix.webpackConfig({
    resolve: {
        alias: {
            $: "jquery",
            jquery: "jquery"
        }
    }
});

mix.browserSync({
    proxy: 'localhost:3000',
    files: ['public/**/*']
});
mix.disableNotifications();