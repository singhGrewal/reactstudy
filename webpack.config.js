const path = require('path');
const webpack = require('webpack');
const ReactStaticPlugin = require('react-static-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');



var config = {
	entry: APP_DIR + '/Routes.jsx',
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
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					
					loader: ['css-loader','sass-loader'],
					publicPath: '/dist',
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: false,
			allChunks: true
		}),
		new ReactStaticPlugin({
			routes: APP_DIR + '/Routes.jsx',  // Path to routes file
			template: APP_DIR + '/template.js',    // Path to JSX template file
			someData: 'Hello',
			gotprops: 'Got Props',
		}),
	]
};
module.exports = config;
