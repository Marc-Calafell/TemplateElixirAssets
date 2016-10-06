const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('sass/app.scss')
       .webpack('js/app.js');
});

elixir(function(mix) {
    mix.browserSync({
        .webpack
        proxy: 'http://localhost:63342/TemplateElixirAssets/public/index.html'
    });
});

