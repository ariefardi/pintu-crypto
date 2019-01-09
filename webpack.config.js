const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const { VuetifyProgressiveModule } = require('vuetify-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path')
exports.plugins.push(
    new VuetifyLoaderPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            compilerOptions: {
                modules: [VuetifyProgressiveModule]
            }
        }
    },
    {
        test: /\.(png|jpe?g|gif)$/,
        resourceQuery: /lazy\?vuetify-preload/,
        use: [
            'vuetify-loader/progressive-loader',
            {
                loader: 'url-loader',
                options: { limit: 8000 }
            }
        ]
    },
    {
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({template: './public/index.html'}),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
        mode: 'development',
    }
)


