const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',    
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './src'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
            template: './src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: './src/img/choripan.jpg', to: './img'},
                {from: './src/img/skewer.jpg', to: './img'},
                {from: './src/img/asado.jpg', to: './img'},
                {from: './src/img/logo.svg', to: './img'},
            ]
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
}