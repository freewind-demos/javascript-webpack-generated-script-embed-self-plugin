const myName = 'GeneratedScriptReposition'

class GeneratedScriptRepositionPlugin {
    constructor(options) {
        this.targetPlaceholder = options['targetPlaceholder']
    }

    apply(compiler) {
        if (!this.targetPlaceholder) return

        compiler.hooks.compilation.tap(myName, compilation => {
            compilation.hooks.htmlWebpackPluginAfterEmit.tap(myName, htmlPluginData => {
                const webpackHtmlFilename = htmlPluginData.outputName
                const generatedHtmlSource = compilation.assets[webpackHtmlFilename].source()
                compilation.assets[webpackHtmlFilename].source = () => {
                    return this.replace(generatedHtmlSource)
                }
            })
        })
    }

    replace(oriHtmlSource) {
        const matches = oriHtmlSource.match(/.*<script>(.+?)<\/script>/)
        const generatedScript = matches[1]
        return oriHtmlSource.replace(this.targetPlaceholder, generatedScript)
            .replace(`<script>${generatedScript}</script>`, '')
    }
}

module.exports = GeneratedScriptRepositionPlugin
