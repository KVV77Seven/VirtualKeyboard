const path = require("path");
const buildPlugins = require("./config/buildPlugins.js");
const buildLoaders = require("./config/buildLoaders.js");
const buildResolve = require("./config/buildResolve.js");
const options = {
    htmlPath: path.resolve(__dirname, "public", "index.html")
}
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "App", "index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.[contenthash].js',
        clean: true,
    },
    resolve: buildResolve(),
    module: {
        rules: buildLoaders(),
    },
    plugins: buildPlugins(options),
}