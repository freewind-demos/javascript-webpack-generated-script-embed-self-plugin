const myName = 'GeneratedScriptReposition'

class GeneratedScriptRepositionPlugin {
    constructor(options) {
        this.targetPlaceholder = options['targetPlaceholder']
        this.errorIfTargetPlaceholderNotFound = options['errorIfTargetPlaceholderNotFound']
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
        if (oriHtmlSource.includes(this.targetPlaceholder)) {
            const matches = oriHtmlSource.match(/[\s\S]*<script>([\s\S]+?)<\/script>/)
            console.log(matches)
            const generatedScript = matches[1]
            return oriHtmlSource.replace(this.targetPlaceholder, generatedScript)
                .replace(`<script>${generatedScript}</script>`, '')
        } else {
            if (this.errorIfTargetPlaceholderNotFound) {
                throw new Error(`[${myName}] targetPlaceholder(${this.targetPlaceholder}) not found in generated html`)
            } else {
                return oriHtmlSource
            }
        }

    }
}

module.exports = GeneratedScriptRepositionPlugin
