class HelloWorldPlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        compiler.hooks.done.tap('HelloWorldPlugin', () => {
            console.log('========= HelloWorldPlugin ==========')
            console.log('Hello, ' + this.options.name + '!')
            console.log('-------------------------------------')
        })
    }
}

module.exports = HelloWorldPlugin