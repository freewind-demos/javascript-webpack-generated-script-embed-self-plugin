const HelloPlugin = require('./src/hello-plugin')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [new HelloPlugin({name: 'webpack'})]
}