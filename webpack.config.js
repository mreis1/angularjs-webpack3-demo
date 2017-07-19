const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
let webpackConfig = {
    entry: './app.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template using Handlebars',
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },

            // this is require to handle the bundle of files such as the png
            {
                loader: 'file-loader',
                test: /\.png$/,
                query: {
                    useRelativePath: process.env.NODE_ENV === "production"
                }
            }
        ]
    }
}

module.exports = webpackConfig;