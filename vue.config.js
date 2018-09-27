const path = require('path')


module.exports = {
    baseUrl: './',
    css: {
        loaderOptions: {
            sass: {
                includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
            }
        }
    }
}