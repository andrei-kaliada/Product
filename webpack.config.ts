import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

const config: webpack.Configuration = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
			minify: {
				collapseWhitespace: true,
			},
		}),
	],
	// devServer: {
	// 	static: {
	// 		directory: path.join(__dirname, 'build'),
	// 	},
	// 	compress: true,
	// 	port: 8080,
	// },
}

export default config
