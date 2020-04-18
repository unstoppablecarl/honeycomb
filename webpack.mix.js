const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Prevents Mix's automatic including and configuring of jQuery
// https://github.com/JeffreyWay/laravel-mix/issues/229#issuecomment-276230983
mix.autoload({});


// allows vuetify styles and variables to build correctly with laravel-mix
// https://github.com/nekosaur/laravel-vuetify


mix
    .js('./stuff/main.js', 'public/js')
    .sourceMaps()

    .options({
        processCssUrls: false,
    });
