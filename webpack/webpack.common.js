'use strict';

const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dest = Path.join(__dirname, '../dist');

module.exports = {
    entry: [

        Path.resolve(__dirname, '../src/scripts/index')
    ],
    output: {
        path: dest,
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin([dest]),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: Path.resolve(__dirname, '../src/index.html')
        }),

    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            }
        ]
    }
};
