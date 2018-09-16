const myName = 'GeneratedScriptEmbedSelfPlugin'

function toBase64(text) {
    return Buffer.from(text).toString('base64')
}

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
            compilation.assets[this.assetName].source = () => this.handleEmbedding(generatedBundleCode)
        })
    }

    handleEmbedding(generatedBundleScript) {
        if (generatedBundleScript.includes(this.targetPlaceholder)) {
            return this.embedSelf(generatedBundleScript)
        } else {
            if (this.errorIfTargetPlaceholderNotFound) {
                throw new Error(`[${myName}] targetPlaceholder(${this.targetPlaceholder}) not found in generated bundle script`)
            } else {
                return generatedBundleScript
            }
        }

    }

    embedSelf(generatedBundleScript) {
        const encoded = toBase64(generatedBundleScript)
        return generatedBundleScript.replace(`"${this.targetPlaceholder}"`, `atob('${encoded}')`)
    }

}

module.exports = GeneratedScriptEmbedSelfPlugin
