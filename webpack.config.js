module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel',
						options: {
							presets: ['react', 'es2015', 'stage-0']
						}
					}
				]
			},
			{
				test: /\.(css|scss|sass)$/,
				loader: 'style!css!sass',
			},
		]
	},
	devtool: 'cheap-module-eval-source-map'
};
