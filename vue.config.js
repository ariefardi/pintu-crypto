const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const { VuetifyProgressiveModule } = require('vuetify-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path')

module.exports = {
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({template: './public/index.html'}),
            new webpack.ProvidePlugin({
                $: 'jquery',
            })
        ],
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    },

    baseUrl: undefined,
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: false,
    parallel: undefined,
    css: undefined
}