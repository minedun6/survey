let mix = require('laravel-mix');

mix.scripts([
    'nodes_modules/jquery-ui-dist/jquery-ui.js'
], 'public/js/app.js');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

