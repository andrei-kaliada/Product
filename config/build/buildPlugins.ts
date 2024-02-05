import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { buildOptions } from './types/config'

export function buildPlugins({
	paths,
	isDev,
}: buildOptions): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
			minify: {
				collapseWhitespace: !isDev,
			},
		}),
		new MiniCssExtractPlugin({
			filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
			chunkFilename: isDev ? 'css/[id].css' : 'css/[id].[contenthash:8].css',
		}),
	]
}
