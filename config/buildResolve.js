const path = require("path");

module.exports = function buildResolve() {
    return {
        alias: {
            'project': path.resolve(__dirname),
        },
        extensions: ['.js', '.jsx'],
    }
}