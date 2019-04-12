const path = require('path');
const mix = require('laravel-mix');

mix
  .js('resources/js/main.js', 'public/js')
  .copyDirectory('resources/js/assets', 'public/img');

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, './resources/js'),
      'img': path.join(__dirname, './resources/js/assets/img'),
    }
  }
})
