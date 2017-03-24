var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.jsx']
	},
	devtool:['eval-source-map' , 'cheap-module-eval-source-map'],
	// devtool: 'source-map',
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
			}
		
		]
	},
};
