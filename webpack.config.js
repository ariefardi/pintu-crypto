const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const { VuetifyProgressiveModule } = require('vuetify-loader')
exports.plugins.push(
    new VuetifyLoaderPlugin(),
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
    }
)


