require('dotenv').config();
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.API_URL': JSON.stringify(process.env.API_URL),
        }),

        // new Dotenv(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/public/index.html',
            templateParameters: {
                BASE_HREF: process.env.BASE_HREF,
            }
        }),
    ],
};
