const path =  require("path");

const miniCss = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = function buildPlugins(options) {
    return [
        new HTMLWebpackPlugin({
            template: options.htmlPath,
            filename: "index.html",
        }),
        new miniCss({
            filename: 'style.css',
         }),
    ]
}