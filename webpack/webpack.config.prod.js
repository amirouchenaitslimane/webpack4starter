'use strict';
const merge = require('webpack-merge');
const commun = require('./webpack.common.js');
const Webpack = require('webpack');
const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSASS  = new ExtractTextPlugin('css/style.css');
module.exports = merge(commun,{
    mode: 'production',
    devtool: 'source-map',
    stats: 'errors-only',
    optimization: {
        minimize: true
    },
plugins:[
    new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin({ filename: 'style.css' }),

    new Webpack.optimize.ModuleConcatenationPlugin(),
    ExtractSASS
],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src')
        }
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css/i,
                use: ExtractSASS.extract(['css-loader?sourceMap=true&minimize=true', 'sass-loader'])
            }
        ]
    }
})