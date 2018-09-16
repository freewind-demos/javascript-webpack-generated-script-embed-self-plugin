const HelloPlugin = require('./src/generated-script-embed-self-plugin')

module.exports = {
    mode: 'production',
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new HelloPlugin({
            assetName: 'bundle.js',
            targetPlaceholder: '---generatedBundleScript---',
            errorIfTargetPlaceholderNotFound: true
        })
    ]
}
