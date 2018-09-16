const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const HelloPlugin = require('./src/generated-script-reposition-plugin')

module.exports = {
    mode: 'production',
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template.html'
        }),
        new ScriptExtHtmlWebpackPlugin({
            inline: ['bundle.js']
        }),
        new HelloPlugin({
            targetPlaceholder: '<<placeholder>>',
            errorIfTargetPlaceholderNotFound: true
        })
    ]
}
