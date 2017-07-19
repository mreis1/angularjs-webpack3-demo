const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');

let webpackConfig = {
    entry: {
        app: './src/app.js',
        vendor: './src/vendor.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template using Handlebars',
            template: './src/index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]',
                query: {
                    useRelativePath: process.env.NODE_ENV === "production"
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract([ 'style-loader', 'css-loader' ])
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

}

module.exports = webpackConfig;