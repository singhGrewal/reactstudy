// module.exports = {
// 	entry: './app/app.jsx',
// 	output: {
// 		path: __dirname,
// 		filename: './public/bundle.js'
// 	},
// 	resolve: {
// 		root: __dirname,
// 		extensions: ['', '.js', '.jsx']
// 	},
// 	module: {
// 		loaders: [
// 			{
// 				loader: 'babel-loader',
// 				query: {
// 					presets: ['react', 'es2015', 'stage-0']
// 				},
// 				test: /\.jsx?$/,
// 				exclude: /(node_modules|bower_components)/
// 			}
// 		]
// 	}
// };





module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
}