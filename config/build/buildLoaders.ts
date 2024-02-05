import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { buildOptions } from './types/config'

export function buildLoaders({ isDev }: buildOptions): webpack.RuleSetRule[] {
	const htmlLoader = {
		test: /\.html$/i,
		loader: 'html-loader',
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const styleLoader = {
		test: /\.(sa|sc|c)ss$/,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) =>
							Boolean(resourcePath.includes('.module.')),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:8]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	}

	return [htmlLoader, typescriptLoader, styleLoader]
}
