const myName = 'GeneratedScriptEmbedSelfPlugin'

class GeneratedScriptEmbedSelfPlugin {
    constructor(options) {
        this.assetName = options['assetName']
        this.targetPlaceholder = options['targetPlaceholder']
        this.errorIfTargetPlaceholderNotFound = options['errorIfTargetPlaceholderNotFound']
    }

    apply(compiler) {
        if (!this.targetPlaceholder) return

        compiler.hooks.emit.tap(myName, compilation => {
            const generatedBundleCode = compilation.assets[this.assetName].source()
            compilation.assets[this.assetName].source = () => this.replace(generatedBundleCode)
        })
    }

    replace(generatedBundleScript) {
        if (generatedBundleScript.includes(this.targetPlaceholder)) {
            return generatedBundleScript.replace(`"${this.targetPlaceholder}"`, `'${generatedBundleScript}'`)
        } else {
            if (this.errorIfTargetPlaceholderNotFound) {
                throw new Error(`[${myName}] targetPlaceholder(${this.targetPlaceholder}) not found in generated bundle script`)
            } else {
                return generatedBundleScript
            }
        }

    }
}

module.exports = GeneratedScriptEmbedSelfPlugin
