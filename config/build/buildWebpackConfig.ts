import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildOptions } from './types/config'

export function buildWebpackConfig(
	options: buildOptions
): webpack.Configuration {
	const { paths, mode, isDev } = options
	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		resolve: buildResolvers(options),
		module: {
			rules: buildLoaders(options),
		},
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
