const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
	entry: APP_DIR + '/app.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: {presets: ['es2015']}
				}],
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			},
		]
	}
};
module.exports = config;
