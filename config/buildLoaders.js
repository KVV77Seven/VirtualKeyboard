const miniCss = require('mini-css-extract-plugin');

module.exports = function buildLoaders() {
    const fileLoader =   
    {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
    }
    const babel = {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
    const scssLoader = {
      test:/\.(s*)css$/,
      use: [
         miniCss.loader,
         'css-loader',
         'sass-loader',
      ]
   }
    return [
        scssLoader,
        fileLoader,
        babel,
    ]
}