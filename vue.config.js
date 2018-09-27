const path = require('path')


module.exports = {
    baseUrl: '/gsk-video-system/dist/',
    css: {
        loaderOptions: {
            sass: {
                includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
            }
        }
    }
}