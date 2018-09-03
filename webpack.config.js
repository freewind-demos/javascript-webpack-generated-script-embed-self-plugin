const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
}