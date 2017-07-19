const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
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
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                include: path.resolve(__dirname, './src')
            },

            // this is require to handle the bundle of files such as the png
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]',
                // or loader: 'file-loader',
                query: {
                    useRelativePath: process.env.NODE_ENV === "production"
                }
            },

            {
                test: /\.css$/,
                loader: 'raw-loader',
                exclude: path.resolve(__dirname, './src')
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

}

module.exports = webpackConfig;