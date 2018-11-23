let mix = require('laravel-mix');

mix
    .js('resources/js/entry-client.js', 'public/js')
    .js('resources/js/entry-server.js', 'public/js');

mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.common.js'
        }
    }
});
